// reviews fetch in jsonplaceholder
const commentForm = document.getElementById("commentContainer");
const commentAddBtn = document.getElementById("commentAddBtn");
commentAddBtn.addEventListener("click", () => {
  commentForm.style.display = "block";
});

// close form
const closeForm = document
  .getElementById("CloseIcon")
  .addEventListener("click", () => {
    commentForm.style.display = "none";
  });

// loading animation
const commentsLoadAni = document.getElementById("commentsLoadAni");
const apiCommentsCount = document.getElementById("apiCommentsCount");

// fetch API comments
async function getApiComments() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=50",
    );
    // loading
    commentsLoadAni.style.display = "block";

    // error catching start
    if (!response.ok) {
      throw new Error("Comments not loading...");
    }
    // convert to json
    const data = await response.json();
    console.log(data);

    data.forEach((loadData) => {
      console.log(loadData.name);
      console.log(loadData.email);
      console.log(loadData.body);
      console.log(loadData.id);

      // create new div for the comments
      const apiCommentBox = document.createElement("div");
      apiCommentBox.className = "comment-box";
      apiCommentBox.classList = "comment-box";

      apiCommentBox.innerHTML = `
        <div class="comment-top">
          <h2>${loadData.id} | ${loadData.name}</h2>
          <span>${loadData.email}</span>
        </div>
        <div class="comment-content">
          <p>
            ${loadData.body}
          </p>
        </div>
      `;

      // const apissCommentsCount = data.length;
      // apiCommentsCount.innerText = apissCommentsCount;
      // console.log(data.length);

      // const usersCommentsCount = 20;
      // const all = apissCommentsCount + usersCommentsCount;
      // console.log(all);

      const apiCommentPart = document.getElementById("apiCommentPart");
      apiCommentPart.appendChild(apiCommentBox);
    });
  } catch (error) {
    console.log("problem : " + error.message);
  } finally {
    console.log("Loaded Completed");
    commentsLoadAni.style.display = "none";
  }
}
getApiComments();

// user comments
const form = document.getElementById("comment-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.getElementById("userName").value.trim();
  const userBatch = document.getElementById("userBatch").value.toString();
  const chooseTeacher = document.getElementById("chooseTeacher");
  const selectTeacher = chooseTeacher.options[chooseTeacher.selectedIndex].text;
  const userComment = document.getElementById("userComment").value.trim();
  const postedDate = new Date().toLocaleDateString();
  const id = Date.now();

  if (
    userComment === "" ||
    userBatch == "" ||
    userName === "" ||
    chooseTeacher === ""
  ) {
    const errorMsg = (document.getElementById("errorMsg").innerHTML =
      "No reviews yet. Be the first to share your expreince.");
    return;
  }

  // existing data
  let comments = localStorage.getItem("userComments");
  comments = comments ? JSON.parse(comments) : [];

  // new comment object
  const newComment = {
    id: id, // unique id number
    name: userName,
    body: userComment,
    bacth: userBatch,
    teacher: chooseTeacher,
    date: postedDate,
  };

  comments.push(newComment);

  // save back
  localStorage.setItem("userComments", JSON.stringify(comments));
  displayUserComment(newComment);

  console.log(userName);
  console.log(userBatch);
  console.log(selectTeacher);
  console.log(userComment);
});

function displayUserComment(data) {
  const reviewPart = document.getElementById("reviews-part");
  const id = Date.now();

  const likeBtn = document.querySelector("#likeBtn");
  // const likeCount = document.querySelector("#likeCount");

  // const
  const storageKey = "likes_" + id;
  const likedKey = "liked_" + id;

  let counts = localStorage.getItem(storageKey);
  counts = counts ? parseInt(counts) : 0;

  let liked = localStorage.getItem(likedKey);

  // ui set
  likeCount.textContent = counts;

  // already liked
  if (liked === "true") {
    likeBtn.classList.add("liked");
    likeCount.style.color = "#f7786f";
    likeBtn.style.pointerEvents = "none";
  }

  likeBtn.addEventListener("click", () => {
    if (liked === "return") return; // for safety
    counts++;
    likeCount.textContent = counts;

    localStorage.setItem(storageKey, counts);
    localStorage.setItem(likedKey, "true");

    likeBtn.classList.add("liked");
    likeBtn.style.pointerEvents = "none";
  });

  const reviewsDiv = document.createElement("div");
  reviewsDiv.className = "comment-box";
  reviewsDiv.classList = "comment-box";

  reviewsDiv.innerHTML = `
    <div class="comment-box" id="comment-box" data-aos="fade-up">
      <div class="comment-top">
        <h2>${data.name}</h2>
        <span>${data.bacth} O/L batch</span>
      </div>
      <div class="comment-content">
      <p>
      ${data.body}
        </p>
        </div>
        <div class="comment-bottom">
        <div class="posted-date">
        <p>
            <i class="fa-solid fa-calendar-days"></i> :
            <span id="posted-date">${data.data}</span>
          </p>
          </div>

          <h4>${data.teacher}</h4>
        <div class="comment-like">
          <span id="likeCount">0</span>
          <i
            id="likeBtn"
            class="fa-regular fa-gem"
            data-aos="flip-left"></i>
        </div>
      </div>
    </div>
  `;

  reviewPart.appendChild(reviewsDiv);
}

// page reload
window.addEventListener("load", () => {
  let comments = localStorage.getItem("userComments");

  if (comments) {
    comments = JSON.parse(comments);

    comments.forEach((comment) => {
      displayUserComment(comment);
    });
  }
});

// like count
// const likeBtn = document.querySelector("#likeBtn");
// const likeCount = document.querySelector("#likeCount");
// let count = localStorage.getItem("likes");

// if (count === null) {
//   count = 0;
// } else {
//   count = parseInt(count);
//   likeCount.style.color = "#ff493c";
//   likeBtn.classList.add("liked");
//   // likeBtn.style.pointerEvents = "none"; // already click check after button disable
// }

// likeCount.textContent = count;
// likeBtn.addEventListener("click", () => {
//   likeBtn.classList.add("liked");
//   likeCount.style.color = "#f7786f";
//   likeBtn.style.pointerEvents = "none"; // already click check after button disable
//   count++;

//   likeCount.textContent = count;
//   localStorage.setItem("likes", count);
// });
