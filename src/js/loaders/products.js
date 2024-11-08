import { Hero } from "../components/hero";
import { ProductsSection } from "../components/products";
import { products } from "../mocks/data/products";

export const productsLoader = ({ category }) => {
  const hero = document.getElementById("hero");
  hero.innerHTML = Hero({ title: category });

  const productsByCategory = products.filter(
    ({ category: productCategory }) => productCategory === category
  );

  const productsElement = document.getElementById("products");
  productsElement.innerHTML = ProductsSection({
    products: productsByCategory,
  });
};
