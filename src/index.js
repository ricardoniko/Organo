import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //React.StrictMode: Em ambiente de desenvolvimento, ajuda a previnir erros e ter
  //mensagens de erros mais amigáveis.
  //Ele faz renderizações adicionais do componente, ele faz isso para analisar se o
  //componente está funcionando corretamente, só acontece durante o desenvolvimento.

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
