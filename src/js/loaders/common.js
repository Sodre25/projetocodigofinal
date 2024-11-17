import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const commonLoader = () => {
  const header = document.getElementById("header");
  header.innerHTML = Header();
  header.className = "sticky top-0 z-50 bg-white";

  const footer = document.getElementById("footer");
  footer.innerHTML = Footer();
};
