function delToDo(index) {
    const element = document.getElementById("t"+index);
    element.parentNode.removeChild(element);
}

function addToDo() {
    let divele = document.createElement("div");
    divele.innerHTML="this is a new to do";
    document.querySelector("body").appendChild(divele);
}