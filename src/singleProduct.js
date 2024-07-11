import axios from "axios";
import { BaseUrl, newBaseUrl, root, router } from "../main";

export const singleProduct = function (match) {
  //console.log(match);
  const selectedId = match.data.id;

  axios
    .get(`${BaseUrl}/products?id=${selectedId}`)
    .then((response) => {
      response.data.map((item) => {
        //console.log(item);
        const body = `
    <div>
        <div class="fixed top-0 left-0 w-full bg-[#f6f6f8] py-3 px-1 flex justify-start items-center">
            <img id="prev" class="w-20" src="/external/imges/prev icon.png" alt="previous">
        </div>
        <div class="slideInDown">
        <figure class="mt-20 w-full h-80 bg-[#f6f6f8] flex items-center justify-center"><img class="w-80 bg-[#f6f6f8] -mt-10" src=${item.imgUrl} alt="img"></figure>
        <div class="flex justify-between px-6 py-6">
          <span class="font-bold text-[32px] text-gray-800">Running Sportwear</span>
          <img class="w-12 h-12" src="/external/imges/heart.png" alt="">
        </div>
        <div class="flex justify-start items-center gap-4 px-6 -mt-3">
          <button class="bg-gray-200 py-1 text-xs px-4 font-bold text-gray-600 rounded-xl">5.371 sold</button>
          <img class="w-6 h-6" src="/external/imges/star.png" alt="star">
          <span class="text-sm text-gray-600 font-semibold">4.3 (5,389 reviews)</span>
        </div>
        <button class="mt-5 mx-6 w-96 h-[1px] bg-gray-200"></button>
        <div class="px-6 py-3">
          <h1 class="font-bold text-xl text-gray-800">Description</h1>
          <span class="text-[15px] font-semibold text-gray-500 mt-4">Lorem ipsum, consectetur katayoon kiana gity iure quasi quidem voluptatum suscipit</span>
          <span class="font-bold text-[17px] text-gray-800">view more</span>
        </div>

        <div id="toast" class="zoomInDown fixed top-10 right-28 bg-green-600 text-white p-4 rounded-lg hidden z-50">
          <p>Item Add successfully!</p>
        </div>

        <div class="flex gap-6 px-6 overflow-x-auto">
          <div>
            <h1 class="font-bold text-gray-800 pb-2 text-[19px]">Size</h1>
            <div class="flex gap-3">
              <button class="w-11 font-bold text-[16px] text-gray-600 h-11 rounded-full border-[2px] border-gray-500">40</button>
              <button class="w-11 font-bold text-[16px] text-gray-600 h-11 rounded-full border-[2px] border-gray-500">41</button>
              <button class="w-11 font-bold text-[16px] text-gray-600 h-11 rounded-full border-[2px] border-gray-500">42</button>
            </div>
          </div>

          <div>
            <h1 class="font-bold text-gray-800 pb-2 text-[19px]">Color</h1>
            <div class="flex gap-3">
                <button><img class="w-14 h-11 bg-gray-200 rounded-full" src="/external/imges/Untitled.png" alt=""></button>
                <button class="w-14 h-11 rounded-full bg-cyan-700"></button>
                <button class="w-14 h-11 rounded-full bg-green-900"></button>
                <button class="w-14 h-11 rounded-full bg-purple-900"></button>
                <button class="w-14 h-11 whitespace-nowrap rounded-full bg-slate-700"></button>
            </div>
            </div>
          
        </div>

        <div class="flex items-center gap-4 mt-3 pt-7 px-6 font-bold text-gray-800 text-[19px]">
            <p class="">Quantity</p>
            <div class="flex justify-evenly bg-gray-200 rounded-full w-36 items-center py-1">
                <button class="text-3xl mb-2" id="minus">-</button><button id="count">1</button><button class="text-3xl mb-2" id="plus">+</button>
            </div>
        </div>
        <button class="mt-5 mx-6 w-96 h-[1px] bg-gray-200"></button>
        
        <div class="flex justify-center gap-7 pt-4">
            <div class="flex flex-col">
                <p class="text-[15px] font-semibold text-gray-500">Total price</p>
                <p class="text-2xl font-bold text-black" id="totalPrice">$${item.price}.00</p>
            </div>
            <button id="addCart" class="flex gap-4 justify-center w-64 rounded-full items-center bg-black font-semibold text-white">
                <img src="/external/imges/carticon.png" alt="">
                <p>Add to Cart</p>
            </button>
        </div>
        </div>
      </div>
    
    
    `;
        root.innerHTML = body;

        const count = root.querySelector("#count");
        const plus = root.querySelector("#plus");
        const minus = root.querySelector("#minus");
        const totalPrice = root.querySelector("#totalPrice");
        const add = root.querySelector("#addCart");

        add.addEventListener("click", () => {
          axios
            .post(`${newBaseUrl}/cart`, item)
            .then((response) => {
              document.getElementById("toast").classList.remove("hidden");
              setTimeout(function () {
                document.getElementById("toast").classList.add("hidden");
              }, 3000);
            })
            .catch((error) => {
              console.error("Error creating post:", error);
            });
        });

        let total = item.price;
        let number = 1;
        minus.addEventListener("click", () => {
          if (number > 1) {
            number -= 1;
            total = item.price * number;
            count.innerText = number;
            totalPrice.innerText = `$${total}.00`;
          }
        });
        plus.addEventListener("click", () => {
          number += 1;
          total = item.price * number;
          count.innerText = number;
          totalPrice.innerText = `$${total}.00`;
        });

        root.querySelector("#prev").addEventListener("click", () => {
          router.navigate(`/brands/${item.brand}`);
        });
      });
    })
    .catch(function (error) {})
    .finally(function () {});
};
