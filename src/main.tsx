import { createRoot } from "react-dom/client";
//Router
import AppRouter from "@routes/AppRouter";
//redux
import { Provider } from "react-redux";
import { persistedStore, store } from "./store";
//redux-persist
import { PersistGate } from "redux-persist/integration/react";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
