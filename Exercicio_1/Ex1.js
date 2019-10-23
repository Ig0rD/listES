const addbtn = document.querySelector("input.add");
const txt = document.querySelector("input.inptxt");
const tbody = document.querySelector("tbody");

if(localStorage.getItem("vetprodutos") === null){
    localStorage.setItem("vetprodutos", "[]");
} else {
    localdata = JSON.parse(localStorage.getItem("vetprodutos"));
    for(let i=0;i<localdata.length;i++){
        list(localdata[i]);
    }
}

addbtn.addEventListener('click', function (e) {
    e.preventDefault();
    let newdata = txt.value;
    addprod(newdata);
    if (typeof (Storage) !== "undefined") {

    }
    list(txt);
});
tbody.addEventListener('click', function (e) {
    e.preventDefault();
    if(event.target.type == 'submit') {
        remprod(event.target.parentNode.parentNode.firstChild.firstChild.textContent);
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    }
});
function list(a){
    let prod;
    if(typeof a == "string") {
        prod = a;
    } else {
        prod = a.value;
    }
    const btn = `<button>Excluir</button>`;
    let td = `<td>${prod}</td><td>${btn}</td>`;
    let tr = `<tr>${td}</tr>`;
    tbody.innerHTML += tr;
}
function addprod(prod){
    vetres = JSON.parse(localStorage.getItem("vetprodutos"));
    vetres.push(prod);
    localStorage.setItem("vetprodutos", JSON.stringify(vetres));
}
function remprod(prod){
    vetres = JSON.parse(localStorage.getItem("vetprodutos"));
    vetres.splice(vetres.indexOf(prod), 1)
    localStorage.setItem("vetprodutos", JSON.stringify(vetres));
}