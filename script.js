const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write task to add");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();

        // this is unnecessary part until->
        alert("Task deleted successfully");
        if (listContainer.innerHTML === "") {
            let reward = document.createElement("button");
            reward.classList.add("rewardbtn");
            alert("Congratulations->You completed all your works");
            reward.innerHTML ="View Reward";
            let app= document.querySelector(".todo-app");

            reward.addEventListener("click", function() {
                let image= document.createElement("img");
                image.classList.add("girl");
                image.src="images/girl.jpg";
                reward.remove();
                app.appendChild(image);
            });

            app.appendChild(reward);

        // till here...
        }
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();