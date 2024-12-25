import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import defaultOptions from "./configs/reactQuery.js";
import Router from "./router/Router.jsx";
import { ToastContainer } from "react-toastify";
import { ModalProvider } from "./context/ModalContext.jsx";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <ModalProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
          <ToastContainer />
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ModalProvider>
  );
}

export default App;
