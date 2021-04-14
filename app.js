const createbudget = document.querySelector(".createbtn");
const additem = document.querySelector(".addbtn");
const getbudget = document.getElementById("getbudget");
const itemname = document.getElementById("itemname");
const itemprice = document.getElementById("itemprice");
const totalbudget = document.getElementById("totalbudget");
const remainingbudget = document.getElementById("remaining");
var itemlist = [];

function createItemList(arr) {
    return Items = {name : arr[0], price : arr[1]}
}

function create(){
    var budget = getbudget.value ;
    console.log(budget);
    total = parseFloat(budget)
    getbudget.value = "";
    const entry = document.createElement("li");
    entry.appendChild(document.createTextNode(total));
    totalbudget.appendChild(entry);
}