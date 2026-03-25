let menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  let navbar = document.getElementById("header-navbar");

  if (navbar.style.display === "block") {
    console.log("None");
    navbar.style.display = "none";

    menuBtn.classList.remove("fa-xmark");
    menuBtn.classList.add("fa-bars");
  } else {
    console.log("Display");
    navbar.classList.add(".mob");
    // navbar.style.display = "block";

    menuBtn.classList.add("fa-xmark");
    menuBtn.classList.remove("fa-bars");
  }
});

// open form
const formBtn = document.getElementById("formBtn");

formBtn.addEventListener("click", () => {
  let signForm = document.getElementById("sign-wrapper");
  signForm.style.display = " block";
  // formBtn.style.display = "none";
});

const logForm = document.getElementById("log-wrapper");
const signupForm = document.getElementById("signup-wrapper");

function loginForm() {
  logForm.style.display = "block";
  signupForm.style.display = "none";
}
function signForm() {
  signupForm.style.display = "block";
  logForm.style.display = "none";
}

const YEAR = new Date().getFullYear();
document.getElementById("year").innerHTML = YEAR;

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let index;
//   let slides = document.getElementsByClassName("image-content");
//   for (let index = 0; index < slides.length; index++) {
//     slides[index].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 2000);
// }

// student sign in store and login
const signSubmit = document.getElementById("sign-submit");
signSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("Currently Stop");
  // console.log(e.target);
  // console.log(e.type);

  const studentName = document.getElementById("studentName");
  const studentGrade = document.getElementById("studentGrade");
  const studyClass = document.getElementById("studyClass");
  const password = document.querySelector("#password");

  console.log(studentName.value);
  // console.log(studentGrade.value);
  // console.log(studyClass.value);
  console.log(password.value);

  document.getElementById("profile-name").innerHTML = studentName.value;
});

// profile card update
// function profileUpdate() {
//   const
// }
