import { Hero } from "../components/hero";
import { ProductsSection } from "../components/products";
import { atheisureProducts } from "../mocks/data/atheisure";

export const atheisureLoader = () => {
  const pageName = "Atheisure";
  const hero = document.getElementById("hero");
  hero.innerHTML = Hero({ title: pageName });

  const sustainable = document.getElementById("products");
  sustainable.innerHTML = ProductsSection({
    products: atheisureProducts,
    category: pageName,
  });
};
