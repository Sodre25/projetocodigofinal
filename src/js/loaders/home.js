import { NewArrivals } from "../components/new-arrivals";

export const homeLoader = () => {
  const newArrivals = document.getElementById("new-arrivals");
  if (!newArrivals) return;

  newArrivals.innerHTML = NewArrivals();
};
