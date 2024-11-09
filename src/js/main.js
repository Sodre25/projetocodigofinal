import "flowbite";
import { commonLoader } from "./loaders/common.js";
import { homeLoader } from "./loaders/home.js";
import { cartLoader } from "./loaders/cart.js";
import { checkoutLoader } from "./loaders/checkout.js";
import { paymentLoader } from "./loaders/payment.js";
import { productsLoader } from "./loaders/products.js";
import { CATEGORIES } from "./constants.js";
import { store } from "./data/store.js";

commonLoader();

const path = window.location.pathname;
const isHomePage = path === "/";
const isSustainablePage = path.includes("sustainable");
const isPlusSizePage = path.includes("plus-size");
const isAtheisurePage = path.includes("atheisure");
const isCartPage = path.includes("cart");
const isCheckoutPage = path.includes("checkout");
const isPaymentPage = path.includes("payment");

switch (true) {
  case isHomePage:
    homeLoader();
    break;
  case isSustainablePage:
    productsLoader({ category: CATEGORIES.SUSTAINABLE });
    break;
  case isPlusSizePage:
    productsLoader({ category: CATEGORIES.PLUS_SIZE });
    break;
  case isAtheisurePage:
    productsLoader({ category: CATEGORIES.ATHEISURE });
    break;
  case isCartPage:
    cartLoader();
    break;
  case isCheckoutPage:
    checkoutLoader();
    break;
  case isPaymentPage:
    paymentLoader();
    break;

  default:
    break;
}

store.cart = [...store.cart];
