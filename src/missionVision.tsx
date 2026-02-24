import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import MissionVisionPage from "@/app/missionVisionPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MissionVisionPage />
  </StrictMode>
);
