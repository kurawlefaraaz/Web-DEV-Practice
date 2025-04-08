const items_container = document.getElementById("items");
const text_area = document.getElementById("text_area");

const vline = document.getElementById("vline");
const lines = document.getElementsByClassName("theline");

var index = 1;
var arrItems = [];

function add_item(){
    var item_index = document.createElement("span");
    item_index.setAttribute("class", `item_index ${index}`);
    item_index.innerText = `${index}. `
    items_container.appendChild(item_index);

    var item_line = document.createElement("span");
    item_line.setAttribute("class", `item_line ${index}`);
    items_container.appendChild(item_line);

    var item = document.createElement("div");
    item.setAttribute("class", `item ${index}`);
    item.innerText = text_area.value;
    items_container.appendChild(item);

    var rect = item.getBoundingClientRect();
    vline.style.height= `${rect.y - 10}px`;
    item_line.style.top= `${rect.y + 10}px`;
    item_index.style.top= `${rect.y + 5}px`;
    
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.backgroundColor = "black";
    }

    index++;
} 