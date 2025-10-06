const inputtask=document.getElementById("input-task");
const listcontainer=document.getElementById("list-container");

function addTask(){
  if(inputtask.value==""){
    alert("You must write something");
  }
  else{
    //adds the task
    let li=document.createElement("li");
    li.innerHTML=inputtask.value;
    listcontainer.appendChild(li);
    //adds the close button
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span); 
  }
  //clears the input box
  inputtask.value="";
  saveData();
}
//task that is completed or removed, getting checked and removed
listcontainer.addEventListener("click",function(e){
  if(e.target.tagName=== "LI")
  {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName==="SPAN")
  {
    e.target.parentElement.remove();
    saveData();
  }
},false);

//saves the data in local storage
function saveData(){
  localStorage.setItem("data",listcontainer.innerHTML);
}
//fetches the data from local storage
function showTask(){
  listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();

