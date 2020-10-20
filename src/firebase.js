import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyBG3AXECq3NNtakMlGkr4lI9BhsmT-srF0",
      authDomain: "todo-cf02c.firebaseapp.com",
      databaseURL: "https://todo-cf02c.firebaseio.com",
      projectId: "todo-cf02c",
      storageBucket: "todo-cf02c.appspot.com",
      messagingSenderId: "698059860053",
      appId: "1:698059860053:web:0456a0c9f6859327770cdc",
      measurementId: "G-DHLD2QH1QY"
  });

  const db = firebaseApp.firestore();
  // const auth = firebase.auth();

  export { db };

