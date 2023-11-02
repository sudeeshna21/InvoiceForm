import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";
import React, { useState, createContext } from "react";
import "./InvoiceForm/invoiceForm.css";
import BasicTabs from "./Tabs";

export const invoiceContext = createContext();

function App() {
  const [invoices, setInvoices] = useState([]);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className="app-back">
        <invoiceContext.Provider value={{ invoices, setInvoices }}>
          <BasicTabs addInvoice={addInvoice} />
        </invoiceContext.Provider>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
