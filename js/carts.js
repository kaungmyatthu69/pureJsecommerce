import { cartBox, cartBtn, products, totalPrice } from "../main";
import { cartCount } from "../main";




function cartCoutUpdate(){
  let count = parseInt( cartCount[0].innerText);
  cartCount.forEach((currentcartcount)=>currentcartcount.innerText=count+1);
    // return cartCount.innerText = parseInt(cartCount.innerText)+1 ;
}


export const calculateTotal=function(){

  let allcart=   cartBox.querySelectorAll('.product-price');
  totalPrice.innerText = ([...allcart].reduce((pv,cp)=>pv+parseFloat(cp.innerHTML),0)).toFixed(2);

}


function createProductInCart({id,title,image,price}){
  let productInCart=document.createElement('div');
  productInCart.classList.add("product-in-cart",'p-3');
  productInCart.innerHTML=`
  <div class="p-2 border rounded mb-1">
    <div class="mb-3">
    <img src="${image}" class="cart-product-img">
    </div>
    <p>${title}</p>
    <div class="row justify-content-between align-items-center ">
    <div class="col-4 ">
    <p >$ <span class="product-price">${price}</span></p>
    </div>
    <div class="col-6">
      <div class=" cart-product-quantity input-group input-group-sm">
      <button class='btn btn-primary dec'> <i class="bi bi-dash pe-none"></i></button>
      <input type="number" aria-label="" class="form-control text-end quantity " value="1" >
      <button class='btn btn-primary inc'> <i class="bi bi-plus pe-none"></i></button>
   
      </div>

    </div>
    
    </div>
  </div>
  `;
  cartBox.append(productInCart);
 

}






export const addToCart=function(e){
    let currentproductcard=(e.target.closest('.product-card'));
    let cprice=parseFloat(currentproductcard.querySelector('.sprice').innerText);
    let currentImg=currentproductcard.querySelector("img");
    let productId=currentproductcard.getAttribute('id');
    let productDetails=products.find(product=>product.id===parseInt(productId));
  
    

    let newImg=document.createElement("img");
    newImg.src=currentImg.src
    
    newImg.style.position="fixed";
    newImg.style.zIndex=2000;
    newImg.style.transition=1+"s";
    newImg.style.height=150+"px";
    newImg.style.top=currentImg.getBoundingClientRect().top+"px";
    newImg.style.left=currentImg.getBoundingClientRect().left+"px";


    document.body.append(newImg)
    setTimeout(()=>{
    newImg.style.height=0+"px";
      newImg.style.transform="rotate(350deg)";
      newImg.style.top=cartBtn.querySelector(".bi").getBoundingClientRect().top+"px";
      newImg.style.left=cartBtn.querySelector(".bi").getBoundingClientRect().left+"px";
    },10)
    setTimeout(()=>{
      cartBtn.classList.add("animate__tada");
      cartCoutUpdate();
      newImg.remove();
      createProductInCart(productDetails);
      calculateTotal()

   
     
   
   
    },800)
    cartBtn.addEventListener('animationend',function(){
      cartBtn.classList.remove('animate__tada');
    })
   
}