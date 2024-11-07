import "flowbite";
import { commonLoader } from "./loaders/common.js";
import { homeLoader } from "./loaders/home.js";
import { sustainableLoader } from "./loaders/sustainable.js";
import { plusSizeLoader } from "./loaders/plus-size.js";
import { atheisureLoader } from "./loaders/atheisure.js";
import { cartLoader } from "./loaders/cart.js";
import { checkoutLoader } from "./loaders/checkout.js";
import { paymentLoader } from "./loaders/payment.js";

commonLoader();

const path = window.location.pathname;
const isHome = path === "/";

// products
const isSustainable = path.includes("sustainable");
const isPlusSize = path.includes("plus-size");
const isAtheisure = path.includes("atheisure");

// cart
const isCart = path.includes("cart");
const isCheckout = path.includes("checkout");
const isPayment = path.includes("payment");

if (isHome) {
  homeLoader();
}

if (isSustainable) {
  sustainableLoader();
}

if (isPlusSize) {
  plusSizeLoader();
}

if (isAtheisure) {
  atheisureLoader();
}

if (isCart) {
  cartLoader();
}

if (isCheckout) {
  checkoutLoader();
}

if (isPayment) {
  paymentLoader();
}
