import { NewArrivals } from "../components/new-arrivals";

export const homeLoader = () => {
  const newArrivals = document.getElementById("new-arrivals");
  newArrivals.innerHTML = NewArrivals();
};
