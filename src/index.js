import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3esJ57NUPCwWnKAeHaHZA7JYKrjvUvSw",
  authDomain: "tsuki-no-yoru.firebaseapp.com",
  projectId: "tsuki-no-yoru",
  storageBucket: "tsuki-no-yoru.appspot.com",
  messagingSenderId: "992628467063",
  appId: "1:992628467063:web:313596c5b15bd4facead72",
  measurementId: "G-ZTEXTPKYJY",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
