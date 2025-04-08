const items_container = document.getElementById("items");
const text_area = document.getElementById("text_area");
const vline = document.getElementById("vline");
const hline = document.getElementById("hline");

function add_item(){
    var item = document.createElement("p");
    item.setAttribute("class", "item")
    
    items_container.appendChild(item)
    item.innerText = text_area.value;

    var rect = item.getBoundingClientRect()
    vline.style.height= `${rect.y}px`;

    vline.style.backgroundColor = "black";
    hline.style.backgroundColor = "black";
}