import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"),
        atheisure: resolve(__dirname, "./src/atheisure.html"),
        // comfort: resolve(__dirname, "./src/comfort.html"),
        sustainable: resolve(__dirname, "./src/sustainable.html"),
        "plus-size": resolve(__dirname, "./src/plus-size.html"),
        cart: resolve(__dirname, "./src/cart.html"),
        checkout: resolve(__dirname, "./src/checkout.html"),
        payment: resolve(__dirname, "./src/payment.html"),
      },
    },
  },
});
