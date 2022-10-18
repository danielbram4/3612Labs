function calculateTotal(quantity, price){
    return quantity * price;
}

function outputCartRow(item, total)
{
    document.write("<tr><td><img src = images/"+  cart[item].product.filename + ">" + "<td>" + cart[item].product.title + "<td>" + cart[item].quantity + "<td>" + "$" +cart[item].product.price.toFixed(2) + "<td>" + "$" + calculateTotal(cart[item].quantity, cart[item].product.price).toFixed(2));

}
function outputSumRow(subtotal, tax , shipping, grandTotal)
{
    document.write("<tr class= \"totals\"><td colspan=\"4\"> Subtotal " + "<td>$"+ subtotal.toFixed(2) + "<tr class= \"totals\"><td colspan=\"4\"> Tax "+"<td>$"+ tax.toFixed(2) + "<tr class= \"totals\"><td colspan=\"4\">Shipping "+ "<td>$" + shipping.toFixed(2) + "<tr class= \"totals\"><td colspan=\"4\" class=\"focus\">Grand Total " + "<td>$" + grandTotal.toFixed(2));
}






        
