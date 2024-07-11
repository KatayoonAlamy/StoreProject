import axios from "axios";
import { BaseUrl, root, router } from "../main";

export const cart = function () {
  const body = `
  <div class="">
   <div class="rotateInDownLeft fixed top-0 left-0 w-full bg-gray-100 py-5 px-9 flex justify-between items-center">
      <div class="flex gap-4 items-center justify-center">
       <img id="prev" class="w-4" src="/external/imges/logo.png" alt="logo">
       <span class="font-semibold text-3xl">My Cart</span>
      </div>
      <button><img src="/external/imges/Screenshot (137).png" alt=""></button>
   </div>
   
   <div id="toast" class="zoomInDown fixed top-28 right-28 bg-red-600 text-white p-4 rounded-lg hidden z-50">
    <p>Item deleted successfully!</p>
  </div>

  <dialog id="deleteModal" class="-mb-20 h-72 w-full bg-white rounded-[40px] p-6">
    <div class="text-2xl text-center font-bold text-gray-800 mb-4">Remove From Cart?</div>
    <div class="text-xl text-gray-600 mb-4">Are you sure you want to delete this item?</div>
    <div class="flex justify-center">
        <button class="px-8 py-3 rounded-3xl bg-black text-white hover:bg-red-600 mr-2" id="confirmDeleteButton">Yes,Remove</button>
        <button class="px-8 py-3 rounded-3xl bg-gray-300 text-black hover:text-gray-800" id="cancelDeleteButton">Cancel</button>
    </div>
  </dialog>

   <div id="content" class=" mt-[60px] gap-6 flex bg-gray-100 py-8 flex-col items-center justify-center">
   
   
   
   </div>

   <section class="fixed bottom-0 left-0 w-full  bg-white gap-8">
        <div class="flex justify-center gap-7 pt-8 pb-4">
            <div class="flex flex-col">
                <p class="text-[15px] font-semibold text-gray-500">Total price</p>
                <p class="text-2xl font-bold text-black p-1" id="totalPrice">$400.00</p>
            </div>
            <a data-navigo href="/checkout" class="flex gap-4 justify-center w-64 rounded-full items-center bg-black font-semibold text-white">
                <p>Checkout</p>
                <img src="/external/imges/gocheckout.png" alt="">
            </a>
        </div>
       <nav
         class="py-4 px-8 flex justify-around">
         <div class="flex flex-col item-center justify-center">
           <a href="/" data-navigo class="text-white ml-1"
             ><img src="./external/imges/home-2.png" alt="home"
           /></a>
           <span class="font-bold text-xs pt-1">Home</span>
         </div>
         <div class="flex flex-col item-center justify-center">
           <a href="/cart" data-navigo class="text-white"
             ><img src="./external/imges/cart-2.png" alt="home"
           /></a>
           <span class="font-bold text-xs pt-1">Cart</span>
         </div>
         <div class="flex flex-col item-center justify-center">
           <a href="#" class="text-white"
             ><img src="./external/imges/shoppi.png" alt="home"
           /></a>
           <span class="font-bold text-xs pt-1">Orders</span>
         </div>
         <div class="flex flex-col item-center justify-center">
           <a href="#" class="text-white"
             ><img src="./external/imges/wallet.png" alt="home"
           /></a>
           <span class="font-bold text-xs pt-1">Wallet</span>
         </div>
         <div class="flex flex-col item-center justify-center">
           <a href="#" class="text-white text-center"
             ><img src="./external/imges/profile.png" alt="home"
           /></a>
           <span class="font-bold text-xs pt-1">Profile</span>
         </div>
       </nav>
     </section>
     </div>
`;
  root.innerHTML = body;

  axios
    .get(`${BaseUrl}/cart`)
    .then((response) => {
      response.data.map((item) => {
        //console.log(item);

        const order = `
        <div class="flex gap-3 bg-white py-6 px-4 rounded-3xl">
        <a data-navigo href="#" class="w-32 h-32 rounded-[30px] bg-[#eceff1] flex items-center justify-center"><img class="w-40" src=${item.imgUrl} alt="adidas"></a>
        <div class="flex flex-col gap-4">
          <div class="flex justify-between">
            <p class="font-bold text-xl">${item.name}</p>
            <img id="bin" class="w-6 h-7" src="/external/imges/bin.png" alt="">
          </div>
          <div class="flex gap-3 justify-start items-center">
            <button class="w-4 h-4 rounded-full bg-cyan-700"></button>
            <p>Black | Size = 41</p>
          </div>
          <div class="flex gap-8 items-center">
            <p class="text-xl font-bold text-black" id="totalPrice">$${item.price}.00</p>
            <div class="flex justify-evenly bg-gray-100 rounded-full w-28 items-center">
              <button class="text-2xl mb-2" id="minus">-</button><button class="count">1</button><button class="text-2xl mb-2 plus" id="">+</button>
            </div>
          </div>
        </div>
      
      </div>
      `;

        root.querySelector("#content").innerHTML += order;
        const deleteModal = document.getElementById("deleteModal");
        const confirmButton = document.getElementById("confirmDeleteButton");
        const cancelButton = document.getElementById("cancelDeleteButton");
        const count = root.querySelectorAll(".count");
        const plus = root.querySelectorAll(".plus");
        const minus = root.querySelector("#minus");
        const totalPrice = root.querySelector("#totalPrice");
        const bin = root.querySelector("#bin");
        let total = item.price;

        bin.addEventListener("click", (e) => {
          deleteModal.showModal();
        });
        confirmButton.addEventListener("click", () => {
          document.getElementById("toast").classList.remove("hidden");
          setTimeout(function () {
            document.getElementById("toast").classList.add("hidden");
          }, 3000);

          deleteModal.close();
        });
        cancelButton.addEventListener("click", () => {
          deleteModal.close();
        });

        minus.addEventListener("click", (e) => {
          console.log(e.target);
          if (number > 1) {
            number -= 1;
            total = item.price * number;
            count.innerText = number;
            totalPrice.innerText = `$${total}.00`;
          }
        });

        plus.forEach((item) => {
          let number = 1;

          item.addEventListener("click", (e) => {
            number += 1;
            total = item.price * number;
            // count.innerText = number;
            e.target.previousElementSibling.innerText = number;
            totalPrice.innerText = `$${total}.00`;
          });
        });

        root.querySelector("#prev").addEventListener("click", () => {
          router.navigate(`/brands/${item.brand}`);
        });
      });
    })
    .catch(function (error) {})
    .finally(function () {});
};
