const Customer = require("./customer");
const wait = [];
const table = [];

function waitlist(cust) { wait.push(cust); }

function tablelist(cust) { table.push(cust); }

function reserve() {
    const tempName = $("#name").val();
    const tempPhone = $("#phone").val();
    const tempId = $("#id").val();
    const newCust = new Customer(tempName, tempPhone, tempId);

    if (table.length > 4) {
        waitlist(newCust)
    }
    else {
        tablelist(newCust)
    };
renderWait();
renderTable();
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
