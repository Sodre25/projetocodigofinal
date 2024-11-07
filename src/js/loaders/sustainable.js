import { Hero } from "../components/hero";
import { ProductsSection } from "../components/products";
import { sustainableProducts } from "../mocks/data/sustainable";

export const sustainableLoader = () => {
  const pageName = "Sustainable";
  const hero = document.getElementById("hero");
  hero.innerHTML = Hero({ title: pageName });

  const sustainable = document.getElementById("products");
  sustainable.innerHTML = ProductsSection({
    products: sustainableProducts,
    category: pageName,
  });
};
