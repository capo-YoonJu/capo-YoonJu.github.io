// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDxCYol5T974z_4pee8ldBb2nFqvQoj3Ww",
  authDomain: "ivory-antler-324709.firebaseapp.com",
  projectId: "ivory-antler-324709",
  storageBucket: "ivory-antler-324709.appspot.com",
  messagingSenderId: "179530627347",
  appId: "1:179530627347:web:e44298e22755c692a602e6",
  measurementId: "G-8K2681395W"
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = '[Background] ' + payload.data.title;
  const notificationOptions = {
    body: payload.data.message,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});