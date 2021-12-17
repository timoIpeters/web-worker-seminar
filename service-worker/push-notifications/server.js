const webPush = require('web-push');
// key generation: webPush.generateVAPIDKeys();
const keys = {
  publicKey: 'BHKzX5jwdnY3oiQQFHF08XRHJp5-HOGMugiF4VYbwb3r3JIqjIISQe4XMjIyw7yU4zb7H_0442u9LAs7W4ctGEk',
  privateKey: '1hJGfqAFihAIQc94G5OTfo1SVKbhHfcOC-2ch7EL2Fc'
}
webPush.setVapidDetails(
  'mailto:example@mail.com',
  keys.publicKey,
  keys.privateKey
);

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/style.css'));
});

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'));
});

app.get('/serviceWorker.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'serviceWorker.js'));
});

app.get('/api/key', (req, res) => {
  res.send({
    key: keys.publicKey
  });
});

app.get('/notification-home', (req, res) => {
  res.sendFile(path.join(__dirname, '/notification-home.html'));
});

app.get('/api/notification-closed', (_, __) => {
      db.forEach(sub => {
        webPush.sendNotification(sub, 'I JUST SEND YOU SOMETHING')
          .then(res => console.log('Success'))
          .catch(err => console.error(err));
      });
});

app.post('/api/save-subscription', (req, res) => {
  db.push(req.body.subscription);
});

app.listen(port, () => console.log(`Connected to port ${port}`));

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    console.log(db);
    setTimeout(() => {
      db.forEach(sub => {
        webPush.sendNotification(sub, 'I JUST SEND YOU SOMETHING')
          .then(res => console.log('Success'))
          .catch(err => console.error(err));
      });
    }, 5000);
  }
});