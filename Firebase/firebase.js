import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxWXJv2Rp_kzt4IcFqUJyW-TL3qv3R-lc",
  authDomain: "blender-gallery-site.firebaseapp.com",
  projectId: "blender-gallery-site",
  storageBucket: "blender-gallery-site.appspot.com",
  messagingSenderId: "1065529704512",
  appId: "1:1065529704512:web:92ae1253e3bed223541fa5",
  measurementId: "G-SM6J0LCF7Q",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
