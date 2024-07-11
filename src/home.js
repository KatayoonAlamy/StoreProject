import axios from "axios";
import { BaseUrl, root, router } from "../main";
import { debounce } from "lodash";

export const home = function (searchInput) {
  if (!localStorage.getItem("onboardingShown")) {
    router.navigate("/land1");
  } else {
    const local = localStorage.getItem("accessToken");
    // console.log(local);
    if (!local) {
      router.navigate("/login");
      return;
    }
  }

  let query;
  if (searchInput.params !== null || searchInput.data !== null) {
    // alert("search mode");
    query = `${BaseUrl}/products?name=${searchInput}`;
  } else {
    query = `${BaseUrl}/mostPopular`;
  }

  root.innerHTML = `
    <div class="bounceInDown">
      <section class="flex justify-between p-5 items-center shadow-sm">
        <div class="flex gap-4">
          <figure class="w-14"><img src="./external/imges/user.png" alt="user"></figure>
          <div class="flex flex-col items-start">
            <span class="font-semibold text-xl text-gray-500">Good Morning 👋</span>
            <span class="font-bold text-xl">${localStorage.getItem(
              "email"
            )}</span>
          </div>
        </div>
        <figure><img src="./external/imges/header.png" alt="user"></figure>
        
      </section>
      <section class="flex flex-col items-center p-1">
        <div class="relative mt-3">
          <span class="absolute inset-y-0 left-0 pl-1 flex items-center mt-2">
          <img src="./external/imges/icons8-search-24.png" class="h-5 w-5" alt="search Icon">
          </span>
          <input autocomplete="new-text" class=" w-96 border-none bg-[#FAFAFA] border-2 px-8 py-2 mt-2 rounded-xs" id="searchInput" type="search" placeholder="Search">
        </div>
        
        <div class="flex flex-wrap justify-center gap-x-9 gap-y-9 mt-5 mx-6">
          <div class="flex flex-col items-center">
            <a  class="flex justify-center items-center w-16 h-16 rounded-full bg-[#eceff1]" data-navigo href="/brands/nike"><img src="./external/imges/categories.png" alt=""></a>
            <p class="pt-3 font-bold">Nike</p>
          </div>
          <div class="flex flex-col items-center">
            <a  class="flex justify-center items-center w-16 h-16 rounded-full bg-[#eceff1]" data-navigo href="/brands/adids"><img src="./external/imges/adidas.png" alt=""></a>
            <p class="pt-3 font-bold">Adidas</p>
          </div>
          <div class="flex flex-col items-center">
            <a  class="flex justify-center items-center w-16 h-16 rounded-full bg-[#eceff1]" data-navigo href="/brands/puma"><img src="./external/imges/puma.png" alt=""></a>
            <p class="pt-3 font-bold">Puma</p>
          </div>
          <div class="flex flex-col items-center">
            <a  class="flex justify-center items-center w-16 h-16 rounded-full bg-[#eceff1]" data-navigo href="/brands/asics"><img src="./external/imges/asics.png" alt=""></a>
            <p class="pt-3 font-bold">Asics</p>
          </div>
          <div class="flex flex-col items-center">
            <a  class="flex justify-center items-center w-16 h-16 rounded-full bg-[#eceff1]" data-navigo href="/brands/reebok"><img src="./external/imges/reebok.png" alt=""></a>
            <p class="pt-3 font-bold">Reebok</p>
          </div>
          <div class="flex flex-col items-center">
            <a  class="flex justify-center items-center w-16 h-16 rounded-full bg-[#eceff1]" data-navigo href="/brands/newbalance"><img src="./external/imges/newba.png" alt=""></a>
            <p class="pt-3 font-bold">New Ba..</p>
          </div>
          <div class="flex flex-col items-center">
            <a  class="flex justify-center items-center w-16 h-16 rounded-full bg-[#eceff1]" data-navigo href="/brands/converse"><img src="./external/imges/convers.png" alt=""></a>
            <p class="pt-3 font-bold">Converse</p>
          </div>
          <div class="flex flex-col items-center">
            <a  class="flex justify-center items-center w-16 h-16 rounded-full bg-[#eceff1]" href="#"><img src="./external/imges/more.png" alt=""></a>
            <p class="pt-3 font-bold">More..</p>
          </div>
        </div>
      </section>
      <section class="mx-6">
        <div class="flex justify-between mt-6">
          <p class="font-bold text-2xl">Most Popular</p>
          <p class="font-bold text-xl">See All</p>
        </div>
        
        <div class="flex flex-nowrap overflow-x-auto gap-4 py-5">
          <button class="w-fit py-1 px-5 bg-gray-700 rounded-full border-2 border-gray-700 text-white text-xl font-semibold">All</button>
          <button class="w-fit py-1 px-5 rounded-full border-2 border-gray-600 text-xl font-semibold id="fnike">Nike</button>
          <button class="w-fit py-1 px-5 rounded-full border-2 border-gray-600 text-xl font-semibold">Adidas</button>
          <button class="w-fit py-1 px-5 rounded-full border-2 border-gray-600 text-xl font-semibold">Puma</button>
          <button class="w-fit py-1 px-5 rounded-full border-2 border-gray-600 text-xl font-semibold">Asics</button>
          <button class="w-fit py-1 px-5 rounded-full border-2 border-gray-600 text-xl font-semibold">Converse</button>
          <button class="w-fit py-1 px-5 rounded-full border-2 border-gray-600 text-xl font-semibold">Rerbok</button>
          <button class="w-fit py-1 whitespace-nowrap px-5 rounded-full border-2 border-gray-600 text-xl font-semibold">New Balance</button>
       
        </div>
      </section>
      <div class="flex flex-wrap px-4 gap-3" id="renderBody"></div>

      

    </div>
    <section class="fixed bottom-0 left-0 w-full bg-white ">
        <nav class=" py-4 px-8 flex justify-around">
          <div class="flex flex-col item-center justify-center">
            <a href="/" data-navigo class="text-white ml-1"
              ><img src="./external/imges/home.png" alt="home"
            /></a>
            <span class="font-bold text-xs pt-1">Home</span>
          </div>
          <div class="flex flex-col item-center justify-center">
            <a href="/cart" data-navigo class="text-white"
              ><img src="./external/imges/cart.png" alt="home"
            /></a>
            <span class="font-bold text-xs pt-1">Cart</span>
          </div>
          <div class="flex flex-col item-center justify-center">
            <a href="/orders" data-navigo class="text-white"
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
            <a class="text-white text-center"
              ><img src="./external/imges/profile.png" alt="home"
            /></a>
            <span class="font-bold text-xs pt-1">Profile</span>
          </div>
        </nav>
      </section>
  `;

  root
    .querySelector("#searchInput")
    .addEventListener("input", debounce(handelSearch, 2000));

  // root.querySelector("#fnike").addEventListener("click", () => {
  //   home(search, nike);
  // });

  const renderBody = document.getElementById("renderBody");
  axios
    .get(query)
    .then((response) => {
      //let counter = 1;
      response.data.map((item) => {
        //console.log(item);
        // if (counter > 1) {
        //   return;
        // }
        // counter += 1;

        const body = `
            
              <div class="pt-2">
                  <a data-navigo href="/single/${item.id}" class="w-48 h-48 rounded-[30px] bg-[#eceff1] flex items-center justify-center"><img class="w-40" src=${item.imgUrl} alt="adidas"></a>
                  <h1 class="font-bold text-2xl pt-2">${item.name}</h1>
                  <p class="font-semibold pt-1">$ ${item.price}.00</p>
              </div>

          `;
        renderBody.innerHTML += body;
      });
    })
    .catch(function (error) {})
    .finally(function () {});
};
let name;
function handelSearch(e) {
  name = e.target.value.trim();
  //console.log(category);
  home(name);
}
