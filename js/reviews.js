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

// fetch API comments
async function getApiComments() {
  try {
    // loading
    commentsLoadAni.style.display = "block";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=57",
    );

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
      // apiCommentBox.classList = "comment-box";

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

      const apiCommentPart = document.getElementById("apiCommentPart");
      apiCommentPart.appendChild(apiCommentBox);

      const apiCommentsOut = document.getElementById("apiCommentsCount");
      // apiCommentsOut.innerHTML = data.length;

      data.forEach(() => {
        apiCommentsOut.innerHTML = data.length + " comments";
      });
    });
  } catch (error) {
    console.log("problem : " + error.message);
  } finally {
    console.log("Loaded Completed");
    commentsLoadAni.style.display = "none";
  }
}
getApiComments();

// input check limit
const userName = document.getElementById("userName");
const nameCharCount = document.getElementById("nameCharCount");
const maxNameCount = 25;

userName.addEventListener("input", () => {
  nameCharCount.style.display = "inline-block";
  const namCurrentLength = userName.value.length;
  nameCharCount.textContent = `${namCurrentLength}/${maxNameCount}`;

  if (namCurrentLength >= maxNameCount) {
    nameCharCount.style.color = "red"; // limit warning
  } else {
    nameCharCount.style.color = "green";
  }
});

// commentCharCount
const userComment = document.getElementById("userComment");
const commentCharCount = document.getElementById("commentCharCount");
const maxCommentCount = 200;

userComment.addEventListener("input", () => {
  commentCharCount.style.display = "inline-block";
  const commentCurrentLength = userComment.value.length;
  commentCharCount.textContent = `${commentCurrentLength}/${maxCommentCount}`;

  if (commentCurrentLength >= maxCommentCount) {
    commentCharCount.style.color = "red"; // limit warning
  } else {
    commentCharCount.style.color = "green";
  }
});

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

  if (userComment === "") {
    const errorMsg = (document.getElementById("errorMsg").innerHTML =
      "Please enter your comment");
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
    batch: userBatch,
    teacher: selectTeacher,
    date: postedDate,
  };

  comments.push(newComment);

  // save back
  localStorage.setItem("userComments", JSON.stringify(comments));
  displayUserComment(newComment);

  const thanksMessage = document.getElementById("thanksMessage");
  thanksMessage.classList.add("show");

  setTimeout(() => {
    thanksMessage.classList.remove("show");
  }, 2000);

  console.log(userName);
  console.log(userBatch);
  console.log(selectTeacher);
  console.log(userComment);

  const usersCommentsOut = document.getElementById("usersCommentsCount");
  const commentsCount = comments.length;
  // usersCommentsOut.innerHTML = comments.length + "comments";
  console.log(comments.length);
  console.log(commentsCount);
});

function displayUserComment(data) {
  const usersCommentPart = document.getElementById("usersCommentPart");
  // const id = Date.now();

  const userCommentBox = document.createElement("div");
  // userCommentBox.className = "comment-box";
  // userCommentBox.classList = "comment-box";

  userCommentBox.innerHTML = `
    <div class="comment-box" id="comment-box" data-aos="fade-up">
      <div class="comment-top">
        <h2>${data.name}</h2>
        <span><i class="fa-solid fa-graduation-cap"></i> | ${data.batch} O/L batch</span>
        </div>
        <h3>${data.teacher}</h3>
      <div class="comment-content">
      <p>
      ${data.body}
        </p>
        </div>
        <div class="comment-bottom">
        <div class="posted-date">
        <p>
            <i class="fa-solid fa-calendar-days"></i> :
            <span id="posted-date">${data.date}</span>
          </p>
          </div>

        <div class="comment-like">
          <span id="likeCount-${data.id}">0</span>
          <i
            id="likeBtn-${data.id}"
            class="far fa-heart"
            data-aos="flip-left"></i>

           
        </div>
      </div>
    </div>
  `;

  // likes concept
  const likeBtn = userCommentBox.querySelector(`#likeBtn-${data.id}`);
  const likeCount = userCommentBox.querySelector(`#likeCount-${data.id}`);

  // // const
  const storageKey = "likes_" + data.id;
  const likedKey = "liked_" + data.id;

  let counts = localStorage.getItem(storageKey);
  counts = counts ? parseInt(counts) : 0;

  let liked = localStorage.getItem(likedKey) === "true";

  // ui set
  likeCount.textContent = counts;

  // already liked
  if (liked === "true") {
    // likeBtn.classList.add("liked");
    likeCount.style.color = "#ff5549";
    likeBtn.style.color = "rgb(255, 255, 255)";
    likeBtn.style.backgroundColor = "#ff564a";
    // likeBtn.style.boxShadow = "0px 0px 16px #f7786f;";
    likeBtn.classList.add("fas");
    // likeBtn.style.pointerEvents = "none";
  }

  // click event
  likeBtn.addEventListener("click", () => {
    // if (liked === "true") return; // for safety

    counts++;
    likeCount.textContent = counts;

    localStorage.setItem(storageKey, counts);
    localStorage.setItem(likedKey, "true");

    liked = "true";
    likeBtn.classList.add("liked");
    likeCount.style.color = "#ff6257";
    likeBtn.style.color = "rgb(255, 255, 255)";
    likeBtn.style.backgroundColor = "#ff6257";
    // likeBtn.style.display = `<i class="fa-solid fa-star"></i>`;
    likeBtn.classList.add("fas");
    // likeBtn.style.pointerEvents = "none";
  });

  // click event
  likeBtn.addEventListener("dblclick", () => {
    if (liked === "false") return; // for safety

    counts--;
    likeCount.textContent = counts;

    localStorage.setItem(storageKey, counts);
    localStorage.setItem(likedKey, "false");

    liked = "false";
    // likeBtn.classList.add("liked");
    likeCount.style.color = "rgba(127, 145, 236, 0.08)";
    likeBtn.style.color = "#20405a";
    likeBtn.style.backgroundColor = "rgba(127, 145, 236, 0.08)";
    // likeBtn.style.display = `<i class="fa-solid fa-star"></i>`;
    likeBtn.classList.add("far");
    // likeBtn.style.pointerEvents = "none";
  });

  usersCommentPart.appendChild(userCommentBox);
  form.reset();

  setTimeout(() => {
    commentForm.style.display = "none";
  }, 500);
}

function resetData() {
  localStorage.clear();
  location.reload();
}
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
//   likeBtn.style.pointerEvents = "none"; // already click check after button disable
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

// ("Please enter your comment");
// const totalComments = data.length + comments.length;
// console.log(totalComments);

// // notification
// Notification.requestPermission().then((permission) => {
//   if (permission === "granted") {
//     new Notification("To-Do Reminder", {
//       body: "Now your Study Time.",
//       icon: "./assets/",
//     });
//     alert("hi");
//   }
// });
