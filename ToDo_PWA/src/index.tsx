import { config } from "process";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { configAxios } from "./axiosConfig";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

const w: any = window as any;
const devtools: any = w.devToolsExtension ? w.devToolsExtension() : (f: any) => f;

configAxios();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
