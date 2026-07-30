import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import References from "./pages/References";
import Prihlaseni from "./pages/Prihlaseni";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "o-nas", Component: About },
      { path: "treninky", Component: Training },
      { path: "aktuality", Component: News },
      { path: "reference", Component: References },
      { path: "prihlaseni", Component: Prihlaseni },
      { path: "kontakt", Component: Contact },
      { path: "ochrana-soukromi", Component: PrivacyPolicy },
    ],
  },
]);