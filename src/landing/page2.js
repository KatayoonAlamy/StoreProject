import { root, router } from "../../main";

export const land2 = function () {
  root.innerHTML = `
    <div class="zoomInDown bg-cover bg-center h-screen text-white bg-land2 gap-7 flex flex-col justify-end py-16 px-12">
        <p class="text-4xl font-semibold">Welcome to 🖐</p>
        <p class="text-7xl font-bold">Shoea</p>
        <p class="text-xs font-bold">The best sneakers & shoes e-commerse app of the century for your fashion needs!</p>
      </div>
    `;

  setTimeout(() => {
    router.navigate("/slide1");
  }, 3000);
};
