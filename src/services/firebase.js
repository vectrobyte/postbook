import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsoVxOkKcoXJmX2KHDpE5Bt3IMmXsbZq8",
  authDomain: "postbook-9d2dc.firebaseapp.com",
  projectId: "postbook-9d2dc",
  storageBucket: "postbook-9d2dc.appspot.com",
  messagingSenderId: "787027154485",
  appId: "1:787027154485:web:b970ba3a588e53c9b8037c",
};

const app = initializeApp(firebaseConfig);

export const authRef = getAuth(app);
export default app;
