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

}
