import axios from "axios";
import { BaseUrl, root, router } from "../main";

export const checkout = function () {
  root.innerHTML = "";
  root.innerHTML = `
    <div class="bg-[#f5f5f8]">
        <div class="fixed top-0 left-0 w-full bg-[#f5f5f8] py-3 px-3 flex justify-between items-center">
           <div class="flex gap-1 items-center">
                <a data-navigo href="/"><img id="prev" class="w-20" src="/external/imges/prev icon.png" alt="previous"></a>
                <p class="font-bold text-2xl">Checkout</p>
           </div>
            <img src="/external/imges/top-more.png" alt="">
        </div>

        <div id="toast" class="zoomInDown fixed top-10 right-28 bg-green-600 text-white p-4 rounded-lg hidden z-50">
          <p>Item Add successfully!</p>
        </div>

        <section class="flex flex-col gap-4 mt-20 px-6 py-2">
        <h1 class="font-bold text-xl py-2">Shipping Address</h1>
        <div class="bg-white flex items-center justify-around py-4 px-3 rounded-xl">
          <img class="w-14 h-14" src="/external/imges/location.png" alt="">
          <div class="flex flex-col gap-2">
            <h1 class="font-bold text-xl py-1">Home</h1>
            <p class="font-semibold text-gray-500">61480 Sunbrook Park, PC 5670</p>
          </div>
          <img class="w-5 h-5" src="/external/imges/edit.png" alt="">
        </div>
      </section>
        <button class="mt-4 mx-6 w-96 h-[1px] bg-gray-300"></button>

        <section class="flex flex-col gap-4 px-6 py-2">
        <h1 class="font-bold text-xl py-2">Order List</h1>
        <div id="content" class="gap-6 flex bg-gray-100 flex-col items-center justify-center">
   
        </div>
      </section>

        <button class="mt-4 mx-6 w-96 h-[1px] bg-gray-300"></button>
        
        <section class="flex flex-col gap-4 px-6 py-2">
        <h1 class="font-bold text-xl py-2">Choose Shipping</h1>
        <div class="bg-white flex items-center justify-around py-4 px-3 rounded-xl">
          <img class="w-9 h-7" src="/external/imges/truck.png" alt="">
          <h1 class="font-bold text-lg py-1">Choose Shipping Type</h1>
          <img id="shipping" class="w-3 h-3" src="/external/imges/nexticon.png" alt="">
        </div>
      </section>

      <button class="mt-4 mx-6 w-96 h-[1px] bg-gray-300"></button>

      <section class="flex justify-center flex-col gap-4 px-6 py-2">
        <h1 class="font-bold text-xl py-2">Promo Code</h1>
        <div class="flex gap-3 items-center justify-around rounded-xl">
          <input class="py-4 px-3 w-80 rounded-lg bg-slate-200" type="text" placeholder="Enter Promo Code">
          <button  id="promo" class="flex items-center justify-center bg-black text-2xl text-white w-12 h-12 rounded-full" id="promo">+</button>
        </div>

        <div class=" h-48 bg-white px-4 flex gap-4 flex-col justify-center items-center">
          <div class="flex gap-56 text-xl font-semibold text-gray-500">
            <span>Amount</span>
            <span>$584.00</span>
          </div>
          <div class="flex gap-60 text-xl font-semibold text-gray-500">
            <span>Shipping</span>
            <span>30.00</span>
          </div>

          <button class="mt-4 mx-6 w-96 h-[1px] bg-gray-300"></button>

          <div class="flex gap-64 text-xl font-semibold text-gray-500">
            <span>Total</span>
            <span>614.00</span>
          </div>
        </div>
      </section>

      <a data-navigo href="/checkout" class="ml-16 mt-6 py-4  flex gap-4 justify-center w-80 rounded-full items-center bg-black font-semibold text-white">
                <p>Countinue To Payment</p>
                <img src="/external/imges/gocheckout.png" alt="">
            </a>

    </div>
    `;

  root.querySelector("#content").innerHTML = "";
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
              <button class="text-2xl mb-2" id="minus">-</button><button id="count">1</button><button class="text-2xl mb-2" id="plus">+</button>
            </div>
          </div>
        </div>
      
      </div>
      `;

        root.querySelector("#content").innerHTML += order;
      });
    })
    .catch(function (error) {})
    .finally(function () {});
};
