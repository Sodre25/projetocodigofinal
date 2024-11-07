import "flowbite";
import { Footer } from "./components/footer.js";
import { Header } from "./components/header.js";
import { NewArrivals } from "./components/new-arrivals.js";

const footer = document.getElementById("footer");
footer.innerHTML = Footer();

const header = document.getElementById("header");
header.innerHTML = Header();

const newArrivals = document.getElementById("new-arrivals");
newArrivals.innerHTML = NewArrivals();
