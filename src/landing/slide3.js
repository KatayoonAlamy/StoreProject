import { root, router } from "../../main";

export const slide3 = function () {
  root.innerHTML = `
    <figure class="animated-element"><img src="./external/imges/slide3.png" alt="slide1"></figure>
      <div class="animated-element w-full flex flex-col items-center pt-6 px-4">
        <p class="font-bold text-3xl text-center">Let’s fulfill your fashion needs with shoearight now!</p>
        <div class="pt-24">
          <button class="bg-gray-400 w-7 h-1 rounded"></button>
          <button class="bg-gray-400 w-7 h-1 rounded"></button>
          <button class="bg-black w-7 h-1 rounded"></button>
        </div>

        <button id="start" class="mt-10 w-96 p-3 px-8 rounded-3xl bg-[#212529] text-white">Get Started</button>
      </div>
    `;
  const nextBtn = document.getElementById("start");

  nextBtn.addEventListener("click", () => {
    localStorage.setItem("onboardingShown", true);
    router.navigate("/");
  });
};
