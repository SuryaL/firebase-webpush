importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
// importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  // messagingSenderId: "YOUR-SENDER-ID",
  // apiKey: "YOUR_API_KEY",
  // projectId: "YOUR_PROJECT_ID",
  // appId: "YOUR_APP_ID",

  apiKey: 'AIzaSyCwYGs-G7Hxhdt-WRnBXEiZ2YoSHTB4Q-o',
  authDomain: 'webpush-7c75f.firebaseapp.com',
  projectId: 'webpush-7c75f',
  storageBucket: 'webpush-7c75f.appspot.com',
  messagingSenderId: '868712298255',
  appId: '1:868712298255:web:dd9db00c455fd76338707a',
  measurementId: 'G-EB4XK898H8',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    // icon: '/itwonders-web-logo.png',
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
