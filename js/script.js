// preloader
// window.addEventListener("load", () => {
//   const preLoader = document.getElementById("preLoader");
//   preLoader.style.opacity = "0";
//   preLoader.style.transition = "opacity 0.5s ease-out";
//   setTimeout(function () {
//     // preLoader.style.display = "none";
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
const formBtn = document.getElementById("formBtn");
const logForm = document.getElementById("log-wrapper");
const signupForm = document.getElementById("signup-wrapper");
const profileBtn = document.getElementById("profile");
const profileCard = document.getElementById("profile-card");

formBtn.addEventListener("click", () => {
  signupForm.style.display = " block";
  logForm.style.display = "none";
  profileCard.style.display = "none";
});

function loginForm() {
  logForm.style.display = "block";
  signupForm.style.display = "none";
}
function signForm() {
  signupForm.style.display = "block";
  logForm.style.display = "none";
}

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

profileBtn.addEventListener("click", () => {
  profileCard.style.display = "block";
  signupForm.style.display = "none";
  logForm.style.display = "none";
});

// const xMark = document.querySelector(".profile-card .fa-xmark");
// xMark.addEventListener("click", () => {
//   profileCard.style.display = "none";
// });

// welcome message
const welcomeMessage = document.getElementById("welcome-msg");
const hours = new Date().getHours();

const userName = "John Doe";

const morning = "Good Morning!";
const afternoon = "Good Afternoon!";
const evening = "Good Evening!";
const night = "Good Night!";

if (hours < 11 && hours >= 0) {
  welcomeMessage.textContent += `${morning} ${userName}`;
} else if (hours < 14) {
  welcomeMessage.textContent += `${afternoon} ${userName}`;
} else if (hours < 18) {
  welcomeMessage.textContent += `${evening} ${userName}`;
} else {
  welcomeMessage.textContent += `${night} ${userName}`;
}

// result graph
const ctx = document.getElementById("olResultChart").getContext("2d");

const olResultChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "Maths Class",
        data: [75, 67, 66],
        backgroundColor: "rgb(247, 120, 111)",
      },
      {
        label: "Science Class",
        data: [78, 77, 69],
        backgroundColor: "rgb(78, 106, 185)",
      },
      {
        label: "English Class",
        data: [95, 87, 86],
        backgroundColor: "rgb(38, 19, 109)",
      },
    ],
  },

  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Year-wise O/L Results",
        font: {
          size: 18,
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
