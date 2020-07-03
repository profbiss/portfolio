import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAfJ2T5juKyIxz3rgTCetzd2XcxMs4bZgs",
  authDomain: "a-shevchenko.firebaseapp.com",
  databaseURL: "https://a-shevchenko.firebaseio.com",
  projectId: "a-shevchenko",
  storageBucket: "a-shevchenko.appspot.com",
  messagingSenderId: "765846389492",
  appId: "1:765846389492:web:3f875dc0accaecb3ce54a1",
  measurementId: "G-PENQKPJEKE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();
const modal = document.querySelector(".modal");
const fog = document.querySelector(".fog");

document
  .getElementById("feedbackForm")
  .addEventListener("submit", submitForm, true);
document.body.addEventListener("click", closeModal, true);

function submitForm(e) {
  e.preventDefault();

  let name = getInputVal("name");
  let email = getInputVal("email");
  let message = getInputVal("message");
  let id = name + `${Math.random()}`.split(".").join("");

  sendMessage(id, name, email, message);

  document.getElementById("feedbackForm").reset();

  showModal();
  setTimeout(() => {
    modal.classList.remove("modal_visible");
    fog.classList.remove("modal-fog");
  }, 8000);
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function sendMessage(id, name, email, message) {
  database.ref("/messages/" + id).set({
    name: name,
    email: email,
    message: message,
  });
}

function showModal() {
  modal.classList.add("modal_visible");
  fog.classList.add("modal-fog");
}
function closeModal(e) {
  const target = e.target;
  if (
    target.classList.contains("modal_visible") ||
    target.classList.contains("modal-fog") ||
    target.classList.contains("modal__thanks")
  ) {
    modal.classList.remove("modal_visible");
    fog.classList.remove("modal-fog");
  }
}
