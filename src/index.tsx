import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { FavoritesContextProvider } from "./store/favorites-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);
