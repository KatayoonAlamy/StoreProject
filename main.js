import "./style.css";
import Navigo from "navigo";
import { land1 } from "./src/landing/page1";
import { home } from "./src/home";
import { land2 } from "./src/landing/page2";
import { slide1 } from "./src/landing/slide1";
import { login } from "./src/login";
import { slide2 } from "./src/landing/slide2";
import { slide3 } from "./src/landing/slide3";
import { signup } from "./src/signup";
import { brands } from "./src/brands";
import { singleProduct } from "./src/singleProduct";
import { cart } from "./src/cart";
import { checkout } from "./src/checkout";

export const root = document.getElementById("app");
export const BaseUrl = "http://localhost:3000";
export const router = new Navigo("/");
export const newBaseUrl = "http://localhost:3000";

router
  .on("/", home)
  .on("/land1", land1)
  .on("/land2", land2)
  .on("/slide1", slide1)
  .on("/login", login)
  .on("/slide2", slide2)
  .on("/slide3", slide3)
  .on("/signup", signup)
  .on("/brands/:brands", (match) => {
    brands(match);
  })
  .on("/single/:id", (match) => {
    singleProduct(match);
  })
  .on("/cart", cart)
  .on("/checkout", checkout)
  .resolve();
