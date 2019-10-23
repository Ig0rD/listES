const addbtn = document.querySelector("input.add");
const form = document.querySelector("form");
const txt = document.querySelector("input.inptxt");
const tbody = document.querySelector("tbody");

localStorage.setItem("vetprodutos", array());
addbtn.addEventListener('click', function (e) {
    e.preventDefault();
    let newdata = txt.value;
    if (typeof (Storage) !== "undefined") {

    }
    list(txt);
});
tbody.addEventListener('click', function (e) {
    e.preventDefault();
    if(event.target.type == 'submit') {
        localStorage.removeItem(event.target.parentNode.parentNode.firstChild.firstChild.textContent);
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    }
});
function list(a){
    let prod = a.value
    const btn = `<button>Excluir</button>`;
    let td = `<td>${prod}</td><td>${btn}</td>`;
    let tr = `<tr>${td}</tr>`;
    tbody.innerHTML += tr;
}
function addprod(prod){
    
}