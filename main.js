// const ul = document.querySelector(".items");
// ul.children[2].style.backgroundColor = "green";
// ul.children[2].style.color = "white";
// ul.style.fontWeight = "700";

// var li = document.getElementsByTagName("li");
// li[4].textContent = "Hello";
// var items = document.getElementsByClassName("list-group-item");
// items[4].style.backgroundColor = "Yellow";

const inpkey = document.getElementById("name");
const inpvalue = document.getElementById("email");
const btninsert = document.getElementById("btninsert");

btninsert.onclick = function () {
    const key = inpkey.value;
    const value = inpvalue.value;

    if (key && value) {
        localStorage.setItem(key, value);
    }
};
