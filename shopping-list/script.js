var button = document.getElementById("enter");
var input = document.getElementById("user_input");
var ul = document.querySelector("ul");
var item = ul.children


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.innerHTML = `<span>${input.value}</span> <button>delete</button>`;
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

