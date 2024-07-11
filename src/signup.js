import axios from "axios";
import { newBaseUrl, root, router } from "../main";

export const signup = function () {
  root.innerHTML = `
    <figure class="animated-up"><img src="./external/imges/prev icon.png" alt=""></figure>
      <form autocomplete="off" class="animated-up flex flex-col gap-4 items-center justify-center mt-28">
        <img class="w-12 h-16" src="./external/imges/logo.png" alt="logo">
        <p class="font-semibold text-4xl mt-12">Create your Account</p>
        <div class="relative mt-6">
          <span class="absolute inset-y-0 left-0 pl-1 flex items-center mt-2">
          <img src="./external/imges/icons8-mail-25 (1).png" class="h-5 w-5" alt="Email Icon">
          </span>
          <input autocomplete="new-text" class=" w-96 border-none bg-[#FAFAFA] border-2 px-10 py-2 mt-2 rounded-xs" id="email" type="email" placeholder="Email">
        </div>

        <div class="relative">
          <span class="absolute inset-y-0 left-0 pl-1 flex items-center mt-2">
          <img src="./external/imges/icons8-lock-24.png" class="h-5 w-5" alt="Email Icon">
          </span>
          <input  class="w-96 border-none bg-[#FAFAFA] border-2 px-10 py-2 mt-2 rounded-xs" id="password" type="password" placeholder="Password">
        
          <span id="eye" class="absolute inset-y-0 right-0 pr-2 flex items-center mt-2">
          <img id="eyeImg" src="./external/imges/invisiblel.png" class="h-5 w-5" alt="invisible Icon">
          </span>
        </div>

        <div>
        <input type="checkbox" id="remember" name="remember">
        <label for="remember" claas="font-bold">Remember me</label>
        </div>

        <a href="/login" data-navigo><p  class="text-blue-600">Already have an account?</p></a>
        <button class="mt-72 w-96 p-2 rounded-3xl bg-gray-400 text-white" id="signInButton">Sign up</button>
      </form>
    `;

  const signUpButton = document.getElementById("signInButton");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const eye = document.getElementById("eye");
  let flag = 0;

  signUpButton.addEventListener("click", async (e) => {
    //console.log(e.target);
    e.preventDefault();
    const credit = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    try {
      const response = await axios.post(`${newBaseUrl}/signup`, credit);
      console.log(response);

      if (response.status === 201) {
        router.navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  });

  const checkInputs = () => {
    if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
      signUpButton.classList.remove("bg-gray-400");
      signUpButton.classList.add("bg-[#212529]");
    } else {
      signUpButton.classList.remove("bg-[#212529]");
      signUpButton.classList.add("bg-gray-400");
    }
  };

  emailInput.addEventListener("input", checkInputs);
  passwordInput.addEventListener("input", checkInputs);

  eye.addEventListener("click", () => {
    if (flag == 0) {
      passwordInput.type = "text";
      document.getElementById("eyeImg").src = "./external/imges/eye.png";
      flag = 1;
    } else {
      passwordInput.type = "password";
      document.getElementById("eyeImg").src = "./external/imges/invisiblel.png";
      flag = 0;
    }
  });
};
