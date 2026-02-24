import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import YasouPage from "@/app/yasouPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <YasouPage />
  </StrictMode>
);
