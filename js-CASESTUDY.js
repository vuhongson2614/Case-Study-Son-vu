let Nameproduct = document.getElementById("full-name");
let amount = document.getElementById("another-name");
let dob = document.getElementById("birth");
let gender = document.getElementsByName('gender');
let address = document.getElementById("address");
let nationality = document.getElementById("nationality");
let height = document.getElementById("height");
let avatar = document.getElementById("avatar");
let idolSelected = -1;

function save() {
    let idol = new Idol(1, Nameproduct.value, amount.value, dob.value, getGender(), address.value, nationality.value, height.value, avatar.value);
    idolManage.addIdol(idol);
    saveData();
    idolManage.display();
}
function deleteIdol(index) {
    idolManage.deleteIdol(index);
    saveData();
    idolManage.display();
}

function editIdol(index) {
    let id = index - 1;
    Nameproduct.value = idolManage.idols[id].Nameproduct;
    amount.value = idolManage.idols[id].amount;
    dob.value = idolManage.idols[id].birth;
    address.value = idolManage.idols[id].address;
    nationality.value = idolManage.idols[id].nationality;
    height.value = idolManage.idols[id].height;
    avatar.value = idolManage.idols[id].avatar;
    idolSelected = id;
}
loadData();
idolManage.display();
function show() {
    if(document.getElementById('benefits').style.display=='none') {
        document.getElementById('benefits').style.display='block';
    }
    return false;
}
function hide() {
    if(document.getElementById('benefits').style.display=='block') {
        document.getElementById('benefits').style.display='none';
    }
    return false;
}


