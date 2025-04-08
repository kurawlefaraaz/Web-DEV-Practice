const items_container = document.getElementById("items");
const text_area = document.getElementById("text_area");

const vline = document.getElementById("vline");
const lines = document.getElementsByClassName("theline");

var index = 0;
var arrItems = [];

function add_item(){
    var item = document.createElement("p");
    item.setAttribute("class", "item");
    
    items_container.appendChild(item);
    item.innerText = text_area.value;
    arrItems.app

    var rect = item.getBoundingClientRect();
    vline.style.height= `${rect.y}px`;
    
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.backgroundColor = "black";
    }
} 