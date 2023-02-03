import { excerpt } from "./utilities";

export const createProductCard=function({id,image,title,description,price}){
    let cartsdiv=document.createElement("div");
    cartsdiv.classList.add("col-lg-4","col-md-6");
    cartsdiv.innerHTML=`    <div class="card  product-card " id="${id}" >
    <div class="card-body d-flex flex-column"  >
      <div class="mb-3">
          <img src="${image}" alt="" class="product-img">
      
      </div>
      <p class="card-title fw-bold text-truncate">${title}</p>
      <p class="card-text small">
       ${excerpt(description,98)}
      </p>
      <div class="d-flex justify-content-between align-items-center mt-auto">
      <p class="fw-bold mb-0">$ <spam class="sprice">${price}</spam></p>
      <button class="btn btn-outline-primary addCartBtn">
      <i class="bi bi-cart-plus pe-none"></i>Add  Cart
      </button>
      </div>
    </div>
  </div>`;
  return cartsdiv;
    
}