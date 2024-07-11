import { root, router } from "../../main";

export const slide2 = function () {
  root.innerHTML = `
    <figure class="animated-element"><img src="./external/imges/slide2.png" alt="slide1"></figure>
      <div class="animated-element w-full flex flex-col items-center pt-6 px-4">
        <p class="font-bold text-3xl text-center">Your satisfaction is our number one periority</p>
        <div class="pt-24">
          <button class="bg-gray-400 w-7 h-1 rounded"></button>
          <button class="bg-black w-7 h-1 rounded"></button>
          <button class="bg-gray-400 w-7 h-1 rounded"></button>
        </div>

        <button id="next" class="mt-10 w-96 p-3 px-8 rounded-3xl bg-[#212529] text-white">Next</button>
      </div>
    `;
  const nextBtn = document.getElementById("next");

  nextBtn.addEventListener("click", () => {
    router.navigate("/slide3");
  });
};
