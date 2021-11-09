const form = document.querySelector("#chat")
const messageContainer = document.querySelector("#message-container");
const messageInput = document.querySelector("#chat__message-input");
const clearBtn = document.querySelector('#chat__message-clear');
const myId = document.querySelector("#myId");
const worker = new SharedWorker('sharedWorker.js');
const senderIdKey = 'senderId';
const tabSenderId = getId();

const command = {
  ADD: 'ADD',
  SET: 'SET'
}

myId.innerHTML = 'senderId: ' + tabSenderId;

/* 
  TODO: What is the initial state?
  TODO: Why do i send all of the messages to every port when i am only using the last received message
*/

form.addEventListener('submit', function(e) {
  e.preventDefault();
  worker.port.postMessage([command.ADD, createMessage(messageInput.value)])  
  messageInput.value = '';
});

clearBtn.addEventListener('click', function(e) {
  //TODO: do need to send this?
  worker.port.postMessage([command.SET, []]);
  messageContainer.innerHTML = '';
});

worker.port.onmessage = function(e) {
  const lastMessage = e.data[e.data.length - 1];

  messageContainer.appendChild(
    createMessageHTMLElement(
      lastMessage.senderId,
      lastMessage.value
    )
  );
}

function createMessage(msg) {
  return {
    senderId: tabSenderId,
    value: msg
  }
}

function createMessageHTMLElement(id, msg) {
  let msgElement = document.createElement('div');
  msgElement.innerText = msg;

  id == tabSenderId ? msgElement.classList.add('me')
              : msgElement.classList.add('other');
  
  return msgElement;
}

function getId() {
  let id = sessionStorage.getItem(senderIdKey) || setId();
  sessionStorage.setItem(senderIdKey, id);
  return id;
}

function setId() {
  return Math.random().toString(16).substr(1,10);
}
