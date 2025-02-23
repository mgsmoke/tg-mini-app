import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import WebApp from "@twa-dev/sdk"; // Импорт Telegram WebApp SDK

console.log("Telegram WebApp initData:", WebApp.initData); // Проверка

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);