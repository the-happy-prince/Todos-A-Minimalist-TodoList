// getting all required elements
var inputBox = document.getElementById("iptask");
var todoList = document.querySelector("#todolist");
var completedTodoList = document.querySelector("#completedtodolist");
var btn = document.getElementById("clear");
var heading2 = document.getElementById("heading2");
var divCompletedTask = document.querySelector("#completedTaskContainer");
var body = document.getElementById("bd");

function startUp() {
    showTasks();
    showCompletedTasks();
    contentVisibility();
    if (bd.style.backgroundColor = "rgb(247, 247, 252)") {
        document.getElementById("sun").style.display = "none";
    }
}

// if user presses the enter key
inputBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        let userData = inputBox.value;
        let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
        if(getLocalStorage == null) {
            listArr = []; //creating blank array
        }
        else {
            listArr = JSON.parse(getLocalStorage);  //transforming json string into a js object
        }
        listArr.push(userData); //Pushing userdata to local storage
        localStorage.setItem("New Todo", JSON.stringify(listArr));  //transforming js object into a json string
        showTasks();
    }
});

function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
    if(getLocalStorage == null) {
        listArr = []; //creating blank array
    }
    else {
        listArr = JSON.parse(getLocalStorage);  //transforming json string into a js object
    }

    const pendingTask = document.querySelector("#pendingTasks");
    pendingTask.textContent = "You have " + listArr.length + " pending tasks.";   //passing the length value

    let newTag = '';
    listArr.forEach((element, index) => {
        newTag += `<li type="none" onclick="completeTask(${index})"> <i class="far fa-circle" style="font-size: 20px; padding-right:10px; color: rgba(57, 190, 252, 0.959);"></i>${element} </li>`;
    });
    todoList.innerHTML = newTag;
    inputBox.value = "";
}

function completeTask(index) {
    let completeTasks = '';
    let getLocalStorage = localStorage.getItem("New Todo"); 
    listArr = JSON.parse(getLocalStorage);
    
    let completedTodo = localStorage.getItem("Completed Todo"); //getting local storage
    if(completedTodo == null) {
        completedListArr = []; //creating blank array
    }
    else {
        completedListArr = JSON.parse(completedTodo);  //transforming json string into a js object
    }
    completeTasks += listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));  //transforming js object into a json string
    showTasks();
    completedListArr.push(completeTasks); //Pushing userdata to local storage
    localStorage.setItem("Completed Todo", JSON.stringify(completedListArr));  //transforming js object into a json string
    showCompletedTasks();
    contentVisibility(); 
}

function showCompletedTasks() {
    let completedTodo = localStorage.getItem("Completed Todo"); //getting local storage
    if(completedTodo == null) {
        completedListArr = []; //creating blank array
    }
    else {
        completedListArr = JSON.parse(completedTodo);  //transforming json string into a js object
    }
    let newTag = '';
    completedListArr.forEach((element) => {
        newTag += `<li type="none"><i class="fas fa-check-circle" style="font-size: 20px; padding-left:0; margin:0; padding-right:10px; color: rgba(57, 190, 252, 0.959);"></i> ${element}</li>`;
    });
    completedTodoList.innerHTML = newTag;
}

function clearCompletedTasks() {
    completedListArr = [];
    localStorage.setItem("Completed Todo", JSON.stringify(completedListArr));  //transforming js object into a json string
    showCompletedTasks();
    contentVisibility();
}

function contentVisibility() {
    let completedTodo = localStorage.getItem("Completed Todo"); //getting local storage
    if(completedTodo == "[]" || completedTodo == null) {
        btn.style.display = "none";
        heading2.style.display = "none";
        divCompletedTask.style.display = "none";
    }
    else {
        btn.style.display = "block";
        heading2.style.display = "block";
        divCompletedTask.style.display = "block";
    }
}

function darkMode() {
    body.style.backgroundColor = "rgb(41, 41, 41)";
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "block";
    document.getElementById("pendingTasks").style.color = "rgb(255, 255, 255)";
    document.getElementById("todolist").style.color = "rgb(255, 255, 255)";
    document.getElementById("heading2").style.color = "rgb(255, 255, 255)";
    document.getElementById("iptask").style.backgroundColor = "rgb(117, 117, 117)";
    document.getElementById("iptask").style.color = "rgb(255, 255, 255)";
    document.getElementById("completedTaskContainer").style.backgroundColor = "rgb(117, 117, 117)";
    document.getElementById("completedTaskContainer").style.color = "rgb(255, 255, 255)";
}

function lightMode() {
    body.style.backgroundColor = "rgb(247, 247, 252)";
    document.getElementById("moon").style.display = "block";
    document.getElementById("sun").style.display = "none";
    document.getElementById("pendingTasks").style.color = "rgb(0, 0, 0)";
    document.getElementById("todolist").style.color = "rgb(0, 0, 0)";
    document.getElementById("heading2").style.color = "rgb(0, 0, 0)";
    document.getElementById("iptask").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("iptask").style.color = "rgb(0, 0, 0)";
    document.getElementById("completedTaskContainer").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("completedTaskContainer").style.color = "rgb(0, 0, 0)";
}