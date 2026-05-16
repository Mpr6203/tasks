console.log("welcome to the electronics shop");

const productDetails = [
  { id: 1, name: "laptop", price: 50000, discount: 3000 },
  { id: 2, name: "headphones", price: 300, discount: 30 },
  { id: 3, name: "keyboard", price: 700, discount: 70 },
  { id: 4, name: "mouse", price: 500, discount: 50 },
  { id: 5, name: "charger", price: 500, discount: false },
];

for (let p in productDetails) {
  let pid = productDetails[p].id;
  let pname = productDetails[p].name;
  let pprice = productDetails[p].price;

  console.log(`${pid}. ${pname} - ₹${pprice}`);
}

console.log("please type the product number in the prompt shown:");

let displayText = "type product number in the given dialog";

let userChoice = prompt(displayText);


let productPrice = 0;

if (userChoice) {
  for (let i in productDetails) {
    let discount = productDetails[i].discount || 0

    if ((productDetails[i].id === Number(userChoice))) {

       productPrice = productDetails[i].price
       console.log(discount ? "your product is eligible for discount:" : "your product is not eligible for discount:");
       productPrice = discount ? productPrice - discount : productPrice;
      } 
     
    
  }

  let tax = 0.18;
  let taxAmount = productPrice * tax;

  let finalPrice = productPrice + taxAmount;

  console.log("calculating the final price along with tax:");

  let timed = setTimeout(() => {
    console.log('the final price of the selected product is:',"₹"+finalPrice);
  }, 3000);
} else {
  console.log("please type an option");
}
