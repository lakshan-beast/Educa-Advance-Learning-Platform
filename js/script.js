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

signupForm.addEventListener("submit", (e) => {
  console.log("submit");
  // });
  // const signSubmit = document.getElementById("sign-submit");
  // signSubmit.addEventListener("click", (e) => {
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

  signupForm.style.display = "none";
  profileCard.style.display = "block";
});

profileBtn.addEventListener("click", () => {
  profileCard.style.display = "block";
  signupForm.style.display = "none";
  logForm.style.display = "none";
});

const xMark = document.querySelector(".profile-card .fa-xmark");
xMark.addEventListener("click", () => {
  profileCard.style.display = "none";
});

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

// profile card update
// function profileUpdate() {
//   const
// }

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
        backgroundColor: "rgb(248, 79, 67)",
      },
      {
        label: "Science Class",
        data: [78, 77, 69],
        backgroundColor: "rgba(20, 236, 38, 0.8)",
      },
      {
        label: "English Class",
        data: [95, 87, 86],
        backgroundColor: "rgba(28, 146, 224, 0.8)",
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
