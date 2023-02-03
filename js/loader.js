export function showloader(){
    const loader=document.createElement("div");
    loader.classList.add('loader','animate__animated','animate__fadeIn');
    loader.innerHTML=`<div  class=" min-vh-100 bg-white d-flex fixed-top justify-content-center align-items-center">
    <div class="spinner-border data-loader" role="status">
      <span class="visually-hidden text-primary">Loading...</span>
    </div>

   </div>`;
   document.body.append(loader);
}
export function  removeloader(){
    const loader=document.querySelector(".loader");
    loader.classList.replace("animate__fadeIn","animate__fadeOut")
    loader.addEventListener('animationend',()=>loader.remove());
  
    // loader.remove();
  }