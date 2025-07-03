const stock = {
    macbook: 2,
    iphone: 4
};

function processPayment(itemName) {
    const item = itemName.toLowerCase();
    stock[item] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log('Payment is not being processed');
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    const item = itemName.toLowerCase();
    if (stock[item] > 0) {
        callbackPayment(itemName);
    }
    else {
        callbackError(itemName);
    }
}

const userInput = prompt("Please enter the item you would like to purchase (Macbook, iPhone):");
if (userInput) {
    processOrder(userInput, processPayment, processError);
}