// slider
let sliderIndex = 0;
const statsSlides = document.querySelector(".stats-slides");
const totalStats = document.querySelectorAll(".slides-para").length;

setInterval(() => {
  sliderIndex++;
  if (sliderIndex >= totalStats) sliderIndex = 0;
  // statsSlides.style.transform = `translateX(-${sliderIndex * 100}%)`;
}, 3000);

// commentsLoadAni
// window.addEventListener("load", () => {
// const commentsLoadAni = document.getElementById("commentsLoadAni");
//   const commentsLoadAni = document.getElementById("commentsLoadAni");
// commentsLoadAni.style.opacity = "0";
// commentsLoadAni.style.transition = "opacity 0.5s ease-out";
//   setTimeout(function () {
//     commentsLoadAni.style.display = "none";
//   }, 500);
// });

// mobile menu
// const menuBtn = document.getElementById("menu-btn");
// const navbars = document.getElementById("header-navbar");

// menuBtn.addEventListener("click", () => {
//   navbars.classList.toggle("active");
// });

// header sticky
const header = document.getElementById("header");
const navbar = document.getElementById("header-navbar");

window.addEventListener("scroll", function () {
  const scrolled = window.scrollY > 50;
  header.classList.toggle("scrolled", scrolled);
  navbar.classList.toggle("scrolled", scrolled);

  header.classList.toggle("transparent", !scrolled);
  navbar.classList.toggle("transparent", !scrolled);
});

// mobile menu
// let menuBtn = document.querySelector("#menu-btn");

// menuBtn.addEventListener("click", () => {
//   let navbar = document.getElementById("header-navbar");

//   if (navbar.style.display === "block") {
//     console.log("None");
//     navbar.style.display = "none";

//     menuBtn.classList.remove("fa-xmark");
//     menuBtn.classList.add("fa-bars");
//   } else {
//     console.log("Display");
//     navbar.classList.add(".mob");
//     navbar.style.display = "flex";

//     menuBtn.classList.add("fa-xmark");
//     menuBtn.classList.remove("fa-bars");
//   }
// });

// function headers() {
//   const navbar = document.getElementById("navbar-links");
//   const more_btns = document.getElementById("menu-btns");
//   // const icon = more_btns.querySelector("i");

//   // Toggle menu & icon
//   more_btns.addEventListener("click", (e) => {
//     e.stopPropagation(); // prevent immediate close
//     navbar.classList.toggle("active");

//     // icon toggle
//     if (navbar.classList.contains("active")) {
//       icon.classList.add("fa-xmark");
//       icon.classList.remove("fa-bars-staggered");
//     } else {
//       icon.classList.add("fa-bars-staggered");
//       icon.classList.remove("fa-xmark");
//     }
//   });
// }
// headers();

// open form
// const formBtn = document.getElementById("formBtn");
// const logForm = document.getElementById("log-wrapper");
// const signupForm = document.getElementById("signup-wrapper");
// const profileBtn = document.getElementById("profile");
// const profileCard = document.getElementById("profile-card");

// formBtn.addEventListener("click", () => {
//   signupForm.style.display = " block";
//   logForm.style.display = "none";
//   profileCard.style.display = "none";
// });

// function loginForm() {
//   logForm.style.display = "block";
//   signupForm.style.display = "none";
// }
// function signForm() {
//   signupForm.style.display = "block";
//   logForm.style.display = "none";
// }

// signupForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("submit");
// });
// const signSubmit = document.getElementById("sign-submit");
// signSubmit.addEventListener("click", (e) => {
// console.log("Currently Stop");
// console.log(e.target);
// console.log(e.type);

//   const studentName = document.getElementById("studentName");
//   const studentGrade = document.getElementById("studentGrade");
//   const studyClass = document.getElementById("studyClass");
//   const password = document.querySelector("#password");

//   console.log(studentName.value);
//   // console.log(studentGrade.value);
//   // console.log(studyClass.value);
//   console.log(password.value);

//   document.getElementById("profile-name").innerHTML = studentName.value;

//   signupForm.style.display = "none";
//   profileCard.style.display = "block";
// });

// profileBtn.addEventListener("click", () => {
//   profileCard.style.display = "block";
//   signupForm.style.display = "none";
//   logForm.style.display = "none";
// });

// const xMark = document.querySelector(".profile-card .fa-xmark");
// xMark.addEventListener("click", () => {
//   profileCard.style.display = "none";
// });

// welcome message
// const welcomeMessage = document.getElementById("welcome-msg");

// const hours = new Date().getHours();
// const userName = "User";

// const morning = "Good Morning!";
// const afternoon = "Good Afternoon!";
// const evening = "Good Evening!";
// const night = "Good Night!";

// if (hours < 11) {
//   welcomeMessage.innerHTML += `${morning} <span> ${userName}</span>`;
// } else if (hours < 14) {
//   welcomeMessage.innerHTML += `${afternoon} <span> ${userName}</span>`;
// } else if (hours < 18) {
//   welcomeMessage.innerHTML += `${evening} <span>  ${userName}</span>`;
// } else {
//   welcomeMessage.innerHTML += `${night} <span> ${userName}</span>`;
// }

// result graph
const ctx = document.getElementById("olResultChart").getContext("2d");

const olResultChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Maths Class",
        data: [75, 67, 66, 90, 120],
        backgroundColor: "rgb(247, 120, 111)",
      },
      {
        label: "Science Class",
        data: [78, 77, 69, 78, 101],
        backgroundColor: "rgb(78, 106, 185)",
      },
      {
        label: "English Class",
        data: [95, 87, 86, 98, 105],
        backgroundColor: "rgb(38, 19, 109)",
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Annual O/L Grade Improvement Analysis (2021-2025) ",
        font: {
          size: 16,
        },
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      beginAtZero: true,
      title: {
        display: true,
        text: "Number of Students",
      },
    },
  },
});

// copyright year
const YEAR = new Date().getFullYear();
document.getElementById("year").innerHTML = YEAR;

// menu toggle script
const barsIcon = document.querySelector(".menu-btn");
const navContainer = document.querySelector(".header-navbar");
const overlay = document.querySelector(".overlay");

// barsIcon.addEventListener("click", () => {
//   navContainer.classList.toggle("nav-active");
//   console.log("click");

//   barsIcon.classList.toggle("fa-bars-staggered");
//   barsIcon.classList.toggle("fa-xmark");
// });

barsIcon.onclick = () => {
  navContainer.classList.toggle("nav-active");
  overlay.classList.toggle("active");

  barsIcon.classList.toggle("fa-bars-staggered");
  barsIcon.classList.toggle("fa-xmark");
};

// overlay click → close menu
overlay.onclick = () => {
  navContainer.classList.remove("nav-active");
  overlay.classList.remove("active");
  barsIcon.classList.toggle("fa-bars-staggered");
  barsIcon.classList.toggle("fa-xmark");
};
