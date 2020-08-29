
const Customer = require("./customer");
const wait = require("./Waitlist");
const table = require("./Tablelist")

function waitlist(cust) { wait.push(cust);console.log(wait); }

function tablelist(cust) { table.push(cust); console.log(table); }

function reserve() {
    const tempName = $("#reserve-name").val();
    const tempPhone = $("#reserve-phone").val();
    const tempEmail = $("#reserve-email").val();
    const tempId = $("#reserve-unique-id").val();
    const newCust = new Customer(tempName, tempPhone, tempEmail, tempId);

    if (table.length > 4) {
        waitlist(newCust)
    }
    else {
        tablelist(newCust)
    };

clear();
}

function renderTable(){

    for (i=0; i<table.length; i++) {
        
        const newDiv = $("<div>");
        newDiv.append("<p> You are table number " + i + "<br> Name: " + table[i].name + "<br> Phone: " + table[i].phone + "<br> Email: " + table[i].email + "<br> ID: " + table[i].id +" </p><br>" )

        $("#tableList").append(newDiv);
}
}

function renderWait(){

    for (i=0; i<wait.length; i++) {
        
        const newDiv = $("<div>");
        newDiv.append("<p> You are number " + i + "in line.<br> Name: " + wait[i].name + "<br> Phone: " + wait[i].phone + "<br> Email: " + wait[i].email + "<br> ID: " + wait[i].id +" </p><br>" )

        $("#waitList").append(newDiv);
}
}

function clear(){
    $("#reserve-name" + i).html("");
    $("#reserve-phone" + i).html("");
    $("#reserve-email" + i).html("");
    $("#reserve-unique-id" + i).html("");
}

$("#submit-btn").on("click", function(){reserve();});

