const items_container = document.getElementById("items");
const text_area = document.getElementById("text_area");

const vline = document.getElementById("vline");
const lines = document.getElementsByClassName("theline");

var index = 1;

const error_div = document.createElement("div");
error_div.innerText = "Error: Empty Item is prohibhited."
error_div.setAttribute("id", "error")


function add_item(){
    console.log(error_div)
    if (text_area.value == ""){
        document.body.appendChild(error_div);
        setTimeout(() => document.getElementById("error").remove(), 2000);
        return 1;
    }

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
    
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.backgroundColor = "black";
    }

    index++;
} 