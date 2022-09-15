



const loader = document.querySelector('.star');
const main = document.querySelector('.main1-div');
const main2 = document.querySelector('.header-div');
const main3 = document.querySelector('.main2-div');

console.log(loader);
 function init() {
 setTimeout(() => {
 loader.style.opacity = 0;
 loader.style.display = 'none';
 main.style.display = 'block';
 setTimeout(() => main.style.opacity = 1, 50);
 main2.style.display = 'block';
 setTimeout(() => main2.style.opacity = 1, 50);
 main3.style.display = 'block';
  setTimeout(() => main3.style.opacity = 1, 50);
 },  8000); 
 }
 init();

function validateForm() {
  let x = document.forms["myForm"]["mail"].value;
  if (x == "") {
   alert("Email must be filled out");
    return false;  
 }
}




 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";


import {
    getFirestore,
  collection,
  getDocs, addDoc
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
 const firebaseConfig = {
    apiKey: "AIzaSyAXm8fcun5ESB6dMFhPdEi6CY6ELafsFPA",
    authDomain: "use-octa-db.firebaseapp.com",
    projectId: "use-octa-db",
    storageBucket: "use-octa-db.appspot.com",
    messagingSenderId: "859071200043",
    appId: "1:859071200043:web:88daf3f4328ce7cb4ca36e",
    measurementId: "G-MDW8BE6MQX"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.querySelector("form");
form.addEventListener("submit", handleForm);

async function handleForm(e) {
  e.preventDefault();

  const elements = Array.from(e.target.elements)
    .filter((el) => el.tagName === "INPUT" && el.name === "email")
    .map((el) => ({ [el.name]: el.value }));
  const data = Object.assign({}, ...elements);
  console.log(data);
  //todo: save data to firestore
  try {
    const userRef = await addDoc(collection(db, "users"),{
   ...data
    });
    console.log(userRef);
    alert("User added successfully....");
  } catch (error) {
    console.log("An error occurred");
    console.log(error.message);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  //todo: retrieve documents from firestore
  const snapshots = await getDocs(collection(db, "users"));
  snapshots.forEach((doc) => {
    console.log(doc.data());
  });
});
