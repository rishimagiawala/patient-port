import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {ethEnabled} from './wallet'

createRoot(document.getElementById("root")).render(<App />);

ethEnabled()