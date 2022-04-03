import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import initWallet from './wallet.js'


createRoot(document.getElementById("root")).render(<App />);
initWallet()