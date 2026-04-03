// reviews fetch in jsonplaceholder
const commentForm = document.getElementById("comment-form");
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  commentForm.style.display = "block";
  console.log("click add");
});

// close form
const closeForm = document
  .getElementById("closeForm")
  .addEventListener("click", () => {
    commentForm.style.display = "none";
  });

const commentsLoad = document.getElementById("commentsLoad");
// loadingFunction();
async function getCommentsData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=20",
    );
    commentsLoad.style.display = "block";
    if (!response.ok) {
      throw new Error("Comments not loading...");
    }
    const data = await response.json();
    console.log(data);

    data.forEach((dataone) => {
      console.log(dataone.name);
      console.log(dataone.email);
      console.log(dataone.body);

      const reviewsDiv = document.createElement("div");
      reviewsDiv.className = "comment-box";
      reviewsDiv.classList = "comment-box";

      reviewsDiv.innerHTML = `
        <div class="comment-top">
          <h2>${dataone.name}</h2>
          <span>${dataone.email}</span>
        </div>
        <div class="comment-content">
          <p>
            ${dataone.body}
          </p>
        </div>
      `;

      const reviewPart = document.getElementById("reviews-part");
      reviewPart.appendChild(reviewsDiv);
    });
  } catch (error) {
    console.log("has problem : " + error.message);
  } finally {
    console.log("Loaded Completed");
    // commentsLoad.style.display = "none";
  }
}
getCommentsData();

// user comments
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

  if (reviewComment === "") {
    console.log("No reviews yet. Be the first to share your expreince.");
  }

  console.log(reviewerName);
  console.log(reviewerBatch);
  console.log(selectTeacher);
  console.log(text);
  console.log(reviewComment);

  const reviewsDiv = document.createElement("div");
  reviewsDiv.className = "comment-box";
  reviewsDiv.classList = "comment-box";

  reviewsDiv.innerHTML = `
    <div class="comment-box" id="comment-box" data-aos="fade-up">
      <div class="comment-top">
        <h2>${reviewerName}</h2>
        <span>${reviewerBatch} O/L batch</span>
      </div>
      <div class="comment-content">
      <h4>${selectTeacher}</h4>
        <p>
          ${reviewComment}
        </p>
      </div>
      <div class="comment-bottom">
        <div class="posted-date">
          <p>
            <i class="fa-solid fa-calendar-days"></i> :
            <span id="posted-date"></span>
          </p>
        </div>
        
        <div class="comment-like">
          <span id="likeCount">0</span>
          <i
            id="likeBtn"
            class="fa-regular fa-gem"
            data-aos="flip-left"
            data-aos-delay="500"></i>
        </div>
      </div>
    </div>
  `;

  const reviewPart = document.getElementById("reviews-part");
  reviewPart.appendChild(reviewsDiv);
});

// like count
const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");
let count = localStorage.getItem("likes");

if (count === null) {
  count = 0;
} else {
  count = parseInt(count);
}

likeCount.textContent = count + " likes";
likeBtn.addEventListener("click", () => {
  likeBtn.classList.add("liked");
  likeCount.style.color = "#f7786f";
  count++;

  likeCount.textContent = count + " likes";
  localStorage.setItem("likes", count);
});
