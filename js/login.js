// open form
// const formBtn = document.getElementById("formBtn");

// formBtn.addEventListener("click", () => {
//   let logForms = document.getElementById("log-wrapper");
//   logForms.style.display = " block";
//   formBtn.style.display = "none";
// });

// text;
// let index = 0;
// let logText = " You’ve successfully Logging.";
// let warningText = `There was an error with the login details provided. Please try again.
// <span id="timer"></span>`;
// let speed = 50;

// function typeWritter() {
//   if (index < logText.length) {
//     let logMsg = document.getElementById("log-msg");
//     logMsg.innerHTML += "";
//     index++;
//     setTimeout(typeWritter, speed);
//   }
// }
// let timer = 5;
// let func = setInterval(function () {
//   if (timer <= 0) {
//     let timerP = document.getElementById("timer");
//     timer--;
//     timerP.innerHTML = timer;
//   }
// }, 1000);
// timeCount();

// button form

// const submitBtn = document.querySelector("#submit-btn");
// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("Clicks");

//   const userName = document.getElementById("uname").value;
//   const password = document.getElementById("password").value;
//   const successMsg = document.getElementById("message-wrapper");
//   const logForm = document.getElementById("log-wrapper");
//   let headMsg = document.getElementById("head-msg");
//   let logMsg = document.getElementById("log-msg");

//   console.log(userName);
//   console.log(password);

//   if (userName === "name" && password === "1234") {
//     successMsg.style.display = "block";
//     logForm.style.display = "none";

//     headMsg.innerHTML = `Congratuations <i class="fa-solid fa-hand fa-shake"></i>`;
//     logMsg.innerHTML = ` You’ve successfully Logging`;
//     typeWritter();
//     timer.style.display = " none";
//   } else {
//     logForm.style.display = "block";
//     successMsg.style.display = "none";
//     typeWritter();
//     logMsg.innerHTML = `There was an error with the login details provided. Please try again.
//     `;
//     console.log("Error ");
//   }
// });

// const lockIcon = document.getElementById("lock");
// lockIcon.addEventListener("click", () => {
//   const password = document.getElementById("password").value;
//   if (password === "password") {
//     password === "string";
//     console.log("HI");
//   }
// });

// const logForm = document.getElementById("log-wrapper");
// const signupForm = document.getElementById("signup-wrapper");

// function loginForm() {
//   logForm.style.display = "block";
//   signupForm.style.display = "none";
// }
// function signForm() {
//   signupForm.style.display = "block";
//   logForm.style.display = "none";
// }

// // let count = 1;
// for (let index = 6; index >= 0; index--) {
//   console.log(index);
//   // setTimeout(index, 1000);
//   if (index === 0) {
//     console.log("Done");
//   }
// }

const showLogin = document.getElementById("show-login");
const showSignup = document.getElementById("show-signup");
const logForm = document.getElementById("log-wrapper");
const signupForm = document.getElementById("signup-wrapper");

showLogin.addEventListener("click", () => {
  logForm.style.display = "block";
  signupForm.style.display = "none";
});
showSignup.addEventListener("click", () => {
  signupForm.style.display = "block";
  logForm.style.display = "none";
});
