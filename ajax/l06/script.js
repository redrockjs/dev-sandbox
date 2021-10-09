/* Сюда вынесли ф-ции работы с UI*/

// createTasks("5151", "first task").then( (data)=> {
//      console.log(data);
//      debugger
// } );

//console.log(getTasks());

let taskTitle = document.getElementById("taskTitle");
let taskList = document.getElementById("taskList");
let widgetId = "5155";

taskSendButton.addEventListener("click", () => {
    let promise = createTasks(widgetId, taskTitle.value);
    promise.then (onTaskSend);
    
});

taskGetButton.addEventListener("click", () => {
    taskList.innerText="";
    let promise = getTasks(widgetId);
    promise.then (onTaskReceive);
});

function onTaskSend() {
     //createTasks(widgetId, Title).then( (data)=> {
  //});
}

function onTaskReceive(data) {
    data.forEach((el) => {
      let li = document.createElement("li");
      li.innerHTML=el.title;
      taskList.appendChild(li);
    });
  }
  