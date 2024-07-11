import { root, router } from "../../main";

export const land1 = function () {
  root.innerHTML = `<div class="flex flex-col h-full w-full gap-80 mt-96 items-center">
        <div class="flex items-center gap-2">
          <img class="w-16" src="./external/imges/Group 2.png" alt="brand" />
          <span class="text-6xl font-bold">Shoea</span>
        </div>
        
        <div class="text-5xl animate-spin"><i class="fa fa-circle-o-notch" aria-hidden="true"></i></div>
        
    </div>
    `;

  setTimeout(() => {
    router.navigate("/land2");
  }, 3000);
};
