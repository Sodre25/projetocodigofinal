import "flowbite";
import { commonLoader } from "./loaders/common.js";
import { homeLoader } from "./loaders/home.js";
import { cartLoader } from "./loaders/cart.js";
import { checkoutLoader } from "./loaders/checkout.js";
import { paymentLoader } from "./loaders/payment.js";
import { productsLoader } from "./loaders/products.js";
import { CATEGORIES } from "./constants.js";

commonLoader();

const path = window.location.pathname;

const isHome = path === "/";
if (isHome) {
  homeLoader();
}

const isSustainable = path.includes("sustainable");
if (isSustainable) {
  productsLoader({ category: CATEGORIES.SUSTAINABLE });
}

const isPlusSize = path.includes("plus-size");
if (isPlusSize) {
  productsLoader({ category: CATEGORIES.PLUS_SIZE });
}

const isAtheisure = path.includes("atheisure");
if (isAtheisure) {
  productsLoader({ category: CATEGORIES.ATHEISURE });
}

const isCart = path.includes("cart");
if (isCart) {
  cartLoader();
}

const isCheckout = path.includes("checkout");
if (isCheckout) {
  checkoutLoader();
}

const isPayment = path.includes("payment");
if (isPayment) {
  paymentLoader();
}
