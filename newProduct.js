let name = document.getElementById("name");
let amount = document.getElementById("mount");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let email = document.getElementById("email");
function add() {
let product = new Product(1,name.value,amount.value,phone.value,address.value,email.value);
productManage.addProduct(product);
saveData();
    productManage.display();
}
function deletel(index) {
 productManage.deletelproduct(index);
 saveData();
 productManage.display();
}
function saveData() {
localStorage.setItem("id",JSON.stringify(productManage.products));
}
function loadData() {
if (localStorage.getItem("id") !== null){
    let arr = JSON.parse(localStorage.getItem("id"));
    for (let i = 0; i < arr.length; i ++){
        let product = new Product(arr[i].id,arr[i].name,arr[i].amount,arr[i].phone,arr[i].address,arr[i].email);
        productManage.addProduct(product);
    }
}
}