// alert("helo ");

const checkboxes = document.querySelectorAll(".task-check");
const count = document.getElementById("task-counter");
const totalTasks = checkboxes.length;

checkboxes.forEach((check) => {
  check.addEventListener("change", () => {
    if (check.checked) {
      check.parentElement.classList.add("completed");
    }
    const completedCount = document.querySelectorAll(
      ".task-check:checked",
    ).length;
    count.innerText = `Completed: ${completedCount}/${totalTasks}`;

    if (completedCount === totalTasks) {
      document.getElementById("congrats-msg").classList.remove("hidden");
    }
  });
});

function updateCountDown() {
  const now = new Date();

  const endOfDay = new Date();
  endOfDay.setHours(8, 15, 59, 999);

  const taskForTime = endOfDay - now;

  if (taskForTime > 0) {
    const hours = Math.floor((taskForTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((taskForTime / (1000 * 60)) % 60);
    const seconds = Math.floor((taskForTime / 1000) % 60);

    document.getElementById("countdown").innerText =
      `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  } else {
    document
      .querySelectorAll(".task-check")
      .forEach((check) => (check.disabled = true));
    document.getElementById("countdown").innerText = "Time Expired";
    clearInterval();
  }
}
setInterval(updateCountDown, 1000);
updateCountDown();

function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

function addTask() {
  const currentTask = document.querySelectorAll(".task-item").length;

  if (currentTask >= 5) {
    showToast("Maximum 5 Tasks");
    return;

    // adding task function
    function createtask() {
      let inputElement = document.getElementById("inputTask");

      const taskOutContiner = document.getElementById("task-output");
      const ulElement = document.querySelector("#task-output ul");
      const addBtn = document.querySelector("#addBtn");

      const message = document.getElementById("error-msg");
      taskOutContiner.style.display = "none";

      addBtn.addEventListener("click", () => {
        if (inputElement.value === "") {
          message.innerHTML = "Please enter your task..";
          return;
          setTimeout(message, 1000);
        }

        const taskList = document.createElement("li");
        taskList.className = "task-li";

        taskList.innerHTML = `
            <h2>${inputElement.value}</h2>
            <div class='task-btns'>
                <button type="button" class="done-btn" title="Done"><i class="fa-solid fa-check"></i></button>
                <button type="button" class="delete-btn title="Delete"><i class="fa-solid fa-trash"></i></button>
            </div>
          `;
        ulElement.appendChild(taskList);
        taskOutContiner.style.display = "block";
        inputElement.value = "";

        const doneBtn = taskList.querySelector(".done-btn");
        const deleteBtn = taskList.querySelector(".delete-btn");
        const h2 = taskList.querySelector("h2");

        doneBtn.addEventListener("click", () => {
          h2.style.opacity = "0.5";
          h2.style.cursor = "none";
          h2.style.textDecoration = "line-through";
        });

        deleteBtn.addEventListener("click", () => {
          if (confirm("Are you Sure?") === true) {
            taskList.style.display = "none";
            taskList.remove();
          }
        });
      });
    }
  }
}
