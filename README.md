# Web Worker Seminar

Project containing examples for the application of different Web Workers in Web Projects.

Seminar made for the "Seminar Informatik" module of the [FH-Wedel](https://www.fh-wedel.de/)

## How to execute the example projects?
Most of the examples can simply be executed by opening the __.html__ file. Only for the service worker examples an http-server is required. Therefor just go into the example folder (e.g. /service-worker/caching) and install the needed dependencies using `npm install`. After installation you can start the http server using `npm start`. The website should now be accessible on `localhost:8080`.

Note that you should unregister the old service worker when you want to execute another service worker example. Keeping the old service worker running may result in it blocking the service worker of the new example.

## Examples
* basic-web-worker:
  
  Basic example of how a simple Web Worker (Dedicated Worker) is used to outsource resource-heavy calculations into a new thread to enhance the user experience of a website. This example also shows the difference between using asynchronous code and using a dedicated worker.

* shared-worker:

  Examples of how shared workers could be used.

  The __chat-application__ example is used to show how a shared worker can generally communicate between multiple browser contexts.

  The __tab-synchronization__ example shows how to synchronize multiple tabs with the same data using a shared worker.

* service-worker:

  These examples show how to apply a service worker to any website.

  The __registration-and-events__ example shows the initialization of a shared worker and the events you can use in the service worker out of the box.

  In the __caching__ example some pictures are cached when entering the website. Once those are loaded into the cache, the website can be used in offline mode.

  The __push-notification__ project shows how to add push notifications to a website using the integrated PushManager of a service worker registration which connects the service worker to the browsers Push Service. When using Firefox, notification settings have to be turned on. When using Google Chrome on Windows, the Windows notifications have to be turned on to be able to see push notifications.

  In the __background-sync__ example a SyncManager, which is also integrated into a service worker registration, is used to add background synchronisation to the website.

_This project is licensed under the terms of the MIT license_