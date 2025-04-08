const items_container = document.getElementById("items");
const text_area = document.getElementById("text_area");

const vline = document.getElementById("vline");
const lines = document.getElementsByClassName("theline");

var item_index = 1;

const error_div = document.getElementById("error");

function add_item(){
    if (text_area.value == ""){
        error_div.innerText = "Error: Empty Item is prohibhited."
        setTimeout(() => error_div.innerText = "", 2000);
        return 1;
    }
    var container = document.createElement("div");

    var item_line = document.createElement("span");
    item_line.setAttribute("class", `item_line`);
    item_line.addEventListener("contextmenu", remove_item)
    item_line.addEventListener("click", item_done)
    container.appendChild(item_line);

    var item = document.createElement("span");
    item.setAttribute("class", `item`);
    item.innerText = text_area.value;
    item.addEventListener("contextmenu", remove_item)
    item.addEventListener("click", item_done)
    container.appendChild(item);

    items_container.appendChild(container);

    var rect = item.getBoundingClientRect();
    vline.style.height= `${rect.y - 20}px`;
    
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.backgroundColor = "black";
    }

    item_index++;
}

function remove_item(e){
    var ele = e.target;
    ele = ele.parentNode;
    ele.remove()

    var lastc = items_container.lastChild
    if (lastc){
        var rect = lastc.getBoundingClientRect();
        vline.style.height= `${rect.y - 20}px`;
        vline.style.textDecorationLine= `${rect.y - 20}px`;
    } else{
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.backgroundColor = "white";
        }
    }
}

function item_done(e){
    var ele = e.target;
    ele = ele.parentNode;
    ele.lastChild.style.textDecorationThickness = "3px";
    console.log(ele.lastChild.style.textDecorationLine);
    if (ele.lastChild.style.textDecorationLine == "line-through"){
        ele.lastChild.style.textDecorationLine = "none";
    } else {
        ele.lastChild.style.textDecorationLine = "line-through";
    }
    // ele.lastChild.style.text = "line-through";
}