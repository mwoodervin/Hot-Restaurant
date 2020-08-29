const Customer = require("./customer");
const wait = require("./Waitlist");
const table = require("./Tablelist")

function waitlist(cust) { wait.push(cust); }

function tablelist(cust) { table.push(cust); }

function reserve() {
    const tempName = $("#reserve-name").val();
    const tempPhone = $("#reserve-phone").val();
    const tempId = $("#reserve-unique-id").val();
    const newCust = new Customer(tempName, tempPhone, tempId);

    if (table.length > 4) {
        waitlist(newCust)
    }
    else {
        tablelist(newCust)
    };
renderWait();
renderTable();
clear();
}

function renderTable(){

    for (i=0; i<table.length; i++) {
        
        $("#nameDisp" + i).html(table[i].name);
        $("#phoneDisp" + i).html(table[i].phone);
        $("#idDisp" + i).html(table[i].id);
        
}
}

function renderWait(){

    for (i=0; i<wait.length; i++) {
        
        $("#nameDisp" + i).html(wait[i].name);
        $("#phoneDisp" + i).html(wait[i].phone);
        $("#idDisp" + i).html(wait[i].id);
        
}
}

function clear(){
    $("#name" + i).html("");
    $("#phone" + i).html("");
    $("#id" + i).html("");
}