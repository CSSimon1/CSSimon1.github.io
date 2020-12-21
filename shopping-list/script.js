var button = document.getElementById("enter");
var input = document.getElementById("user_input");
var ul = document.querySelector("ul");
var item = ul.children;
var listLimit = 15;

function inputLength() {
    return input.value.length;
}

function createListElement() {
    if (document.querySelector("ul").children.length === listLimit) {
        alert("Sarah is not strong enough to carry any more groceries.");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `<span>${input.value}</span> <button class="check"></button>`;
    ul.appendChild(li);
    input.value="";
    listeners();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterEnter(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

function crossOutItem(i) {
    item[i].firstChild.addEventListener("click", function() {
        this.classList.add("done");
    });
}

function deleteItem(i) {
    item[i].lastChild.addEventListener("click", function() {
        this.parentElement.remove();
    });

}

function listeners() {
    var i = 0;
    for (i = 0; i < item.length; i++) {     
        crossOutItem(i);
        deleteItem(i);
    };
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

listeners();

