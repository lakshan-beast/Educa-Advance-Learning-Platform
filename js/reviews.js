// reviews fetch in jsonplaceholder

// fetch data
// alert("hi");

function loadingFunction() {
  console.log("Loading");
  const status = document.getElementById("status");
  status.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin-pulse fa-2xs" style="color: rgb(177, 151, 252);"></i>  Loading, please wait`;
}
async function getCommentsData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10",
    );
    loadingFunction();
    if (!response.ok) {
      throw new Error("Comments not loading...");
    }
    const data = await response.json();
    console.log(data);
    // console.log(data.name);
    // console.log(data.email);
    // console.log(data.body);

    data.forEach((dataone) => {
      console.log(dataone.name);
      console.log(dataone.email);
      console.log(dataone.body);

      const reviewsDiv = document.createElement("div");
      reviewsDiv.textContent = "Some Text";
      reviewsDiv.style.backgroundColor = "red";
      // reviewsDiv.className = "review-card";
      reviewsDiv.classList = "review-card";
      reviewsDiv.innerHTML = `
    <h4>${dataone.name} | <span> ${dataone.id} O/L Batch</span></h4>
    <p>
    <q>${dataone.body} <span>@Maths teacher</span></q>
    </p>
    <div class="count">
      <span><i class="fa-regular fa-heart"></i></span>
      <p>50</p>
    </div>
    `;
      const reviewPart = document.getElementById("reviews-part");
      reviewPart.appendChild(reviewsDiv);
    });
  } catch (error) {
    console.log("has problem : " + error.message);
  } finally {
    console.log("Loaded Completed");
  }
}
getCommentsData();

// async function getCommentsData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/comments",
//     );
//     if (!response.ok) {
//       throw new Error("Comments not loading...");
//     }
//     const data = await response.json();
//     const userName = data.name;
//     const userEmail = data.email;
//     const userComment = data.body;
//     // const userName = data.name;

//     for (let index = 0; index <= 5; index++) {
//       // console.log(userName);
//       // console.log(userEmail);
//       // console.log(userComment);
//       // console.log(data);

//       // console.log(data.name);
//       // console.log(data.email);
//       // console.log(data.body);

//       data.forEach((dataone) => {
//         console.log("Comments : " + data);
//       });
//     }
//   } catch (error) {
//     console.log("has problem : " + error.message);
//   } finally {
//     console.log("Loaded Completed");
//   }
// }
// getCommentsData();

const form = document.getElementById("comment-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const reviewerName = document.getElementById("reviewerName").value;
  const reviewerBatch = document.getElementById("reviewerBatch").value;
  const reviewerTeacher = document.getElementById("reviewTeacher");
  const selectTeacher =
    reviewerTeacher.options[reviewerTeacher.selectedIndex].text;
  const reviewComment = document.getElementById("reviewComment").value;

  const text = ` <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae tempore veritatis assumenda in fugit iste mollitia impedit at laborum, maiores ad. Accusantium possimus dolore molestias, enim in iure consectetur?  <mark>${selectTeacher}</mark></p>`;

  console.log(reviewerName);
  console.log(reviewerBatch);
  // console.log(selectTeacher);
  console.log(text);
  console.log(reviewComment);
});
