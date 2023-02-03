import "./style.scss";
import * as bootstrap from "bootstrap";
import { showloader,removeloader } from "./js/loader";
import { createProductCard } from "./js/product-card";
import { addToCart, calculateTotal } from "./js/carts";
export let products=[];
let productsRow=document.querySelector(".products")
export const cartBtn=document.querySelector(".cart-btn");
export let totalPrice=document.querySelector(".total")



export const cartCount=document.querySelectorAll('.cart-count');
export let cartBox=document.querySelector(".cart-box");
let total=document.querySelector(".total");

showloader();


fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>{
              products=json,
              products.forEach(product => {
            
                productsRow.append(createProductCard(product));
               
              
              });
              removeloader();
              
            }
            )

productsRow.addEventListener('click',function(e){
  if(e.target.classList.contains('addCartBtn')){
    addToCart(e);
  }
})

cartBox.addEventListener('click',function(e){
if (e.target.classList.contains('dec')) {
  let productRow=(e.target.closest('.row '));
  
  let  price=productRow.querySelector('.product-price') ;
  let cartquantity=productRow.querySelector('.quantity');
  if(cartquantity.valueAsNumber>1)
{

  
  let singlePrice= (parseFloat(price.innerText)).toFixed(2);

  
  singlePrice=(parseFloat(singlePrice/cartquantity.valueAsNumber,2)).toFixed(2);


   cartquantity.valueAsNumber -=1;
  
   price.innerText=(parseFloat(singlePrice*cartquantity.valueAsNumber)).toFixed(2);
calculateTotal();
  
}  

}else if(e.target.classList.contains('inc')){
  let productRow=(e.target.closest('.row '));
let  price=productRow.querySelector('.product-price') ;
let cartquantity=productRow.querySelector('.quantity');
let singlePrice= (parseFloat(price.innerText)).toFixed(2);
singlePrice=(parseFloat(singlePrice/cartquantity.valueAsNumber,2)).toFixed(2);

 cartquantity.valueAsNumber +=1;
 price.innerText=(parseFloat(singlePrice*cartquantity.valueAsNumber)).toFixed(2);
 
 calculateTotal();

}
})






