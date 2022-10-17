let counter=0;
let total_price=0;

let d_charge=0;
let s_charge=0;
let vat=0;
let totalv=0;

function addtocard(price)
{
    counter++;
    document.getElementById('total-products').innerText = counter;
    total_price+=price;
    document.getElementById('total').innerText = total_price;
    document.getElementById('price').innerText = price;
    d_charge+=100;
    document.getElementById('delivery-charge').innerText = d_charge;
    s_charge+=150;
    document.getElementById('Shipping-Charge').innerText = s_charge;
    vat+=((total_price/1000)*24);
    document.getElementById('vat').innerText = vat;
    totalv=total_price+vat;
    document.getElementById('totalv').innerText = totalv;
}
function orderProducts()
{
    document.getElementById('total-products').innerText = 0;
    document.getElementById('total').innerText = 0;
    document.getElementById('price').innerText = 0;
    document.getElementById('delivery-charge').innerText = 0;
    document.getElementById('Shipping-Charge').innerText = 0;
    document.getElementById('vat').innerText = 0;
    document.getElementById('totalv').innerText = 0;



}
