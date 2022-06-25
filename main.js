// const ul = document.querySelector(".items");
// ul.children[2].style.backgroundColor = "green";
// ul.children[2].style.color = "white";
// ul.style.fontWeight = "700";

// var li = document.getElementsByTagName("li");
// li[4].textContent = "Hello";
// var items = document.getElementsByClassName("list-group-item");
// items[4].style.backgroundColor = "Yellow";

let details = document.getElementById("details");
details.style.fontWeight = "700";

let inpkey = document.getElementById("name");
let inpvalue = document.getElementById("age");
let btninsert = document.getElementById("btninsert");
let outvalue = document.getElementById("output");

btninsert.onclick = function () {
    let key = inpkey.value;
    let value = inpvalue.value;

    if (key && value) {
        localStorage.setItem(key, value);
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    outvalue.innerHTML += `<li>${key}       ${value}</li><br/>`;
}
