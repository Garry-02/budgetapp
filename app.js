const getbudget = document.getElementById("getbudget");
const itemname = document.getElementById("itemname");
const itemprice = document.getElementById("itemprice");
const totalbudget = document.getElementById("totalbudget");
const remainingbudget = document.getElementById("remaining");
const listitems = document.getElementById("listitems");
let total = 0;

function create(){
    var budget = getbudget.value ;
    console.log(budget);
    total = parseFloat(budget);
    getbudget.value = "";
    const entry = document.createElement("li");
    entry.appendChild(document.createTextNode(total));
    totalbudget.appendChild(entry);
    itemname.style.visibility = "visible";
    itemprice.style.visibility = "visible";
    document.querySelector(".addbtn").style.visibility = "visible";
}

function additem(){
    const name = itemname.value ;
    const price = parseFloat(itemprice.value) ;
    const itemarray = [];
    itemarray.push(name);
    itemarray.push(price);
    console.log(itemarray);
    itemname.value = "";
    itemprice.value = "";
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(itemarray));
    listitems.appendChild(item);
}
