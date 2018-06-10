var fs = require("fs");

var action = process.argv[2];
var transaction = process.argv[3];


switch (action) {
    case "total":
        total();
        break;

    case "deposit":
        deposit();
        console.log("successfully deposited, you'll be heading on vacation before you know it!")
        break;

    case "withdraw":
        withdraw();
        console.log("hmmm what are you buying?")
        break;

    case "lotto":
        lotto();
        break;
}


function total() {

    fs.readFile("bank.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.split(", ")
        var result = 0;

        for (var i = 0; i < data.length; i++) {
            if (parseFloat(data[i])) {
                result += parseFloat(data[i]);
            }
        }
        console.log("you have a total of " + result.toFixed(2));
    });

}

function deposit() {

    fs.appendFile("bank.txt", transaction + ", ", "utf8", function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function withdraw() {

    fs.appendFile("bank.txt", "-" + transaction + ", ", "utf8", function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function lotto() {
    if (transaction === "5") {
        transaction = 30;
        console.log("you won!!!")
    } else {
        transaction = -1;
        console.log("are you sure gambling is worth it?")
    }
    fs.appendFile("bank.txt", transaction + ", ", "utf8", function (err) {
        if (err) {
            return console.log(err);
        }
    });
}