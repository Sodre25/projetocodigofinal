import { Hero } from "../components/hero";
import { ProductsSection } from "../components/products";
import { products } from "../mocks/data/products";
import { store } from "../mocks/store";

const extractProductFromForm = (form) => {
  const data = new FormData(form);
  const product = {
    id: data.get("id"),
    name: data.get("name"),
    price: data.get("price"),
    size: data.get("size"),
    details: data.get("details"),
    category: data.get("category"),
  };

  return product;
};

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

  productsByCategory.forEach((product) => {
    const cardForm = document.getElementById(`product-form-${product.id}`);

    cardForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const productForm = e.target;
      const product = extractProductFromForm(productForm);

      const productIndex = store.cart.findIndex(
        ({ id, size }) => id === product.id && size === product.size
      );

      if (productIndex === -1) {
        store.cart = [...store.cart, { ...product, quantity: 1 }];
      } else {
        store.cart[productIndex].quantity++;
        store.cart = [...store.cart];
      }
    });
  });
};
