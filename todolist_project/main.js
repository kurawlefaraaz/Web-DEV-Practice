const items_container = document.getElementById("items");
const text_area = document.getElementById("text_area");

function add_item(){
    var item = document.createElement("p");
    item.setAttribute("class", "item")
    items_container.appendChild(item)
    item.innerText = text_area.value;
}