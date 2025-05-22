import { createRoot } from "react-dom/client";
//Router
import AppRouter from "@routes/AppRouter";
//redux
import { Provider } from "react-redux";
import store from "./store";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
