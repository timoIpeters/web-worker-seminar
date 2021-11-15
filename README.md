# Web Worker Seminar

Project containing examples for the application of different Web Workers in Web Projects.

Seminar made for the "Seminar Informatik" module of the [FH-Wedel](https://www.fh-wedel.de/)

## Examples
* basic-web-worker:
  
  Basic example of how a simple Web Worker (Dedicated Worker) is used to outsource resource-heavy calculations into a new thread to enhance the user experience of a website. This example also shows the difference between using asynchronous code and using a dedicated worker.

* shared-worker:

  Examples of how shared workers could be used. The __chat-application__ example is used to show how a shared worker can generally communicate between multiple browser contexts. The __tab-synchronization__ example show how to synchronize multiple tabs with the same data using a shared worker.

* service-worker:

  These examples show how to apply a service worker to any website. The __registration-and-events__ example shows the initialization of a shared worker and the events you can use in the service worker out of the box. In the __caching__ example some pictures are cached when entering the website. Once those are loaded into the cache, does not need an internet connection anymore to load the pictures.

_This project is licensed under the terms of the MIT license_