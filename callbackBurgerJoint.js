function takeOrder(order) {
  console.log(
    "Customer orders " +
      order.item +
      " - waiter writes down order on a ticket to give to the chef"
  );

  handOrderToChef(order, cookOrder);
}

function handOrderToChef(order, cb) {
  console.log("Waiter hands order off to chef");

  cb(order, finishOrder);
}

function cookOrder(order, cb) {
  console.log("Chef begins to cook order");

  for (let i = 0; i < order.ingredients.length; i++) {
    const ingredient = order.ingredients[i];
    console.log("Chef adds " + ingredient + " to the order");
  }
  cb(order, pickUpOrder);
}

function finishOrder(order, cb) {
  console.log(
    "Chef finishes the order, places it on the pickup zone, and hits the bell to notify the waiter"
  );
  cb(order, deliverOrder);
}

function pickUpOrder(order, cb) {
  console.log("Waiter hears the bell and come to pick up the order");
  cb(order, waitForCustomerToEat);
}

function deliverOrder(order, cb) {
  console.log("Waiter takes the order to the table");
  cb(order, bringBill);
}

function waitForCustomerToEat(order, cb) {
  console.log("Customer eats their food");
  cb(order, takePayment);
}

function bringBill(order, cb) {
  console.log("The waiter drops off the bill for $" + order.price);
  cb(order, ringOut);
}

function takePayment(order, cb) {
  order.payment = 20;

  console.log(
    "The waiter takes the payment of $" +
      order.payment +
      " and bill to the register and rings it out"
  );

  cb(order, waitForCustomerToLeave);
}
function ringOut(order, cb) {
  order.change = order.payment - order.price;
  console.log(
    "The waiter takes the payment receipt and $" +
      order.change +
      " in change back to the customer"
  );
  cb(order, cleanTable);
}
function waitForCustomerToLeave(order, cb) {
  console.log("The waiter waits for the customer to leave");
  cb(order);
}
function cleanTable(order) {
  console.log(
    "The waiter tells the busser that the customer has left and the table is ready to be cleaned"
  );
}

// THIS IS AN EXAMPLE OF AN ORDER
const dummyOrder = {
  item: "Cheeseburger & Fries",
  ingredients: ["bun", "patty", "cheese", "lettuce", "tomato", "fries"],
  price: 12.99,
};

takeOrder(dummyOrder);
