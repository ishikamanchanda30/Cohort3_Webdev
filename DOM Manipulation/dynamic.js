function addToDo() {
    const inputelement = document.querySelector("input");
    const task = inputelement.value;
    console.log(task);
}

// SELECT ALL OF THE QUERIES 
//   > gives back a list of all the queries indexed from 0
function All(){
    const inputelement2 = document.querySelectorAll("h3").innerHTML;
    console.log(inputelement2);

    // first to do task
    const inputelement3 = document.querySelectorAll("h3")[0];
    console.log(inputelement3);

}

// UPDATING ELEMENTS :
//   > changes the inner HTML of the element
function updateElement() {
    const firstTODO=document.querySelector("h3");
    firstTODO.innerHTML = "Skip Class";
}

// SET INTERVAL 
let cnt = 0;
function callback() {
    const firstTODO=document.querySelector("h3");
    firstTODO.innerHTML = cnt;
    console.log(cnt);
    cnt = cnt + 1;
}
setInterval(callback,1000); 
