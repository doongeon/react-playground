import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import React from "react";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RecoilRoot>
        <App />
    </RecoilRoot>
);
