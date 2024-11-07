import "flowbite";
import { commonLoader } from "./loaders/common.js";
import { homeLoader } from "./loaders/home.js";
import { sustainableLoader } from "./loaders/sustainable.js";
import { plusSizeLoader } from "./loaders/plus-size.js";
import { atheisureLoader } from "./loaders/atheisure.js";

commonLoader();

const path = window.location.pathname;
const isHome = path === "/";

// products
const isSustainable = path.includes("sustainable");
const isPlusSize = path.includes("plus-size");
const isAtheisure = path.includes("atheisure");

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
