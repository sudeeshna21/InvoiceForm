import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InvoiceForm from "./InvoiceForm/invoiceForm";
import InvoiceGrid from "./InvoiceForm/invoiceGrid";
import "./InvoiceForm/invoiceForm.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ addInvoice }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", paddingTop: '2%'}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="custom tabs example"
          >
            <Tab
              label="Invoice Form"
              component={Link}
              to="/form"
              className="ui-tabs"
              sx={{ marginLeft: "40%" }}
              {...a11yProps(0)}
            />
            <Tab
              label="Invoice Grid"
              component={Link}
              to="/grid"
              className="ui-tabs"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <Routes>
          <Route
            path="/form"
            element={
              <CustomTabPanel value={value} index={0}>
                <InvoiceForm addInvoice={addInvoice} setValue={setValue}/>
              </CustomTabPanel>
            }
          />
          <Route
            path="/grid"
            element={
              <CustomTabPanel value={value} index={1}>
                <InvoiceGrid />
              </CustomTabPanel>
            }
          />
        </Routes>
      </Box>
    </Router>
  );
}
