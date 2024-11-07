import { Hero } from "../components/hero";
import { ProductsSection } from "../components/products";
import { plusSizeProducts } from "../mocks/data/plus-size";

export const plusSizeLoader = () => {
  const pageName = "Plus Size";
  const hero = document.getElementById("hero");
  hero.innerHTML = Hero({ title: pageName });

  const sustainable = document.getElementById("products");
  sustainable.innerHTML = ProductsSection({
    products: plusSizeProducts,
    category: pageName,
  });
};
