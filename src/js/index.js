import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import BasicExample from "./BasicExample";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const container = document.getElementById('react-app');
const root = createRoot(container);
// root.render(<App />);
root.render(<BasicExample />);
