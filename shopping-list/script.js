const button = document.getElementById("enter");
const input = document.getElementById("user_input");
const ul = document.querySelector("ul");
const item = ul.children;
const listLimit = 15;
const listLength = document.querySelector("ul").children.length

function inputLength() {
    return input.value.length;
}

function checkLength() {
    if (listLength === listLimit) {
        alert("Sarah is not strong enough to carry any more groceries.");
        return;
    }
}

function createListElement() {
    let li = document.createElement("li");
    li.innerHTML = `<span>${input.value}</span> <button class="check"></button>`;
    ul.appendChild(li);
    crossOutItem(li);
    deleteItem(li);
    input.value="";
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

function crossOutItem(li) {
    li.firstChild.addEventListener("click", function() {
        if (li.firstChild.classList.contains("done")) {
            li.firstChild.classList.remove("done");
        } else {
            li.firstChild.classList.add("done");
        }      
    });
}

function deleteItem(li) {
    li.lastChild.addEventListener("click", function() {
        li.firstChild.parentElement.remove();
    });

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

