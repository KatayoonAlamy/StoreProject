import axios from "axios";
import { BaseUrl, root, router } from "../main";
import { singleProduct } from "./singleProduct";

export const brands = function (match) {
  const brand = match.data.brands;
  //console.log(brand);
  root.innerHTML = `
    <div class="rotateInDownLeft fixed top-0 left-0 w-full bg-white py-3 px-1 flex justify-start items-center">
        <img id="prev" class="w-20" src="/external/imges/prev icon.png" alt="previous">
        <span class="font-bold text-2xl">${brand}</span>
    </div>
    <div id="content" class=" flex flex-wrap px-4 gap-3 mt-20"></div>
  `;
  const content = document.getElementById("content");

  axios
    .get(`${BaseUrl}/products?brand=${brand}`)
    .then((response) => {
      response.data.map((item) => {
        //console.log(item);
        const body = `
            
              <div class="pt-2 rotateInDownLeft">
                  <a data-navigo href="/single/${item.id}" class="w-48 h-48 rounded-[30px] bg-[#eceff1] flex items-center justify-center"><img class="w-40 bg-[#eceff1]" src=${item.imgUrl} alt="adidas"></a>
                  <h1 class="font-bold text-2xl pt-2">${item.name}</h1>
                  <p class="font-semibold pt-1">$ ${item.price}.00</p>
              </div>

          `;
        content.innerHTML += body;

        root.querySelector("#prev").addEventListener("click", () => {
          router.navigate("/");
        });
      });
    })
    .catch(function (error) {})
    .finally(function () {});
};
