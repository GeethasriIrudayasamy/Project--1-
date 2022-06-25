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
// let inpvalue = document.getElementById("email");
let inpage = document.getElementById("age");
let btninsert = document.getElementById("btninsert");
let outvalue = document.getElementById("output");

btninsert.onclick = function () {
    let details = {
        Name: inpkey.value,
        // value: inpvalue.value,
        age: inpage.value,
    };
    let details_serialised = JSON.stringify(details);
    localStorage.setItem("details", details_serialised);
    let details_deserialised = JSON.parse(localStorage.getItem("details"));
};

for (let i = 0; i < localStorage.length; i++) {
    const name = localStorage.key(i);
    const age = localStorage.getItem(name);
    outvalue.innerHTML += `${name} ${age}  <br  />`;
}
