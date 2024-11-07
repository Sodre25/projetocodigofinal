import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const commonLoader = () => {
  const header = document.getElementById("header");
  header.innerHTML = Header();

  const footer = document.getElementById("footer");
  footer.innerHTML = Footer();
};
