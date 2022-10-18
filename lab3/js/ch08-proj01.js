
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');


let total = 0;
let subtotal = 0;
let tax = 0;
let shipping = 0;
let grandTotal = 0;
for(var i = 0; i < cart.length; i++)
{
   outputCartRow(i, total);
   total = total + calculateTotal(cart[i].quantity, cart[i].product.price);
}
subtotal = total;
tax = tax_rate * subtotal;
if(subtotal > shipping_threshold)
{
   shipping = 0;
}
else{
   shipping = 40;
}
grandTotal = shipping + tax + subtotal;
outputSumRow(subtotal, tax, shipping, grandTotal);

