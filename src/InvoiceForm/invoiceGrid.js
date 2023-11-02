import React, { useState, useContext } from "react";
import { invoiceContext } from "../App";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
  Button,
} from "@mui/material";

const InvoiceGrid = () => {
  const { invoices, setInvoices } = useContext(invoiceContext);
  const [editedInvoices, setEditedInvoices] = useState(invoices.map(invoice => ({ ...invoice, isEditing: false })));

  const handleEdit = (index) => {
    const updatedInvoices = [...editedInvoices];
    updatedInvoices[index].isEditing = true;
    setEditedInvoices(updatedInvoices);
  };

  const handleSave = (index) => {
    const updatedInvoices = [...editedInvoices];
    const { qty, costPrice, marginPercentage, salesPrice, discountPercentage, taxPercentage } = updatedInvoices[index];

    const margin = (costPrice * marginPercentage) / 100;
    const totalSalesPrice = qty * salesPrice;
    const discount = (totalSalesPrice * discountPercentage) / 100;
    const tax = (totalSalesPrice - discount) * (taxPercentage / 100);
    const finalSalesPrice = totalSalesPrice - discount + tax;

    updatedInvoices[index] = {
      ...updatedInvoices[index],
      margin,
      totalSalesPrice,
      discount,
      tax,
      finalSalesPrice,
      isEditing: false,
    };

    setEditedInvoices(updatedInvoices);
  };

  const handleCancel = (index) => {
    const updatedInvoices = [...editedInvoices];
    updatedInvoices[index].isEditing = false;
    setEditedInvoices(updatedInvoices);
  };

  const handleInputChange = (e, index, field) => {
    const updatedInvoices = [...editedInvoices];
    updatedInvoices[index][field] = e.target.value;
    setEditedInvoices(updatedInvoices);
  };


  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="ui-table-head">Qty</TableCell>
            <TableCell className="ui-table-head">Cost Price</TableCell>
            <TableCell className="ui-table-head">Margin</TableCell>
            <TableCell className="ui-table-head">Margin%</TableCell>
            <TableCell className="ui-table-head">Discount</TableCell>
            <TableCell className="ui-table-head">Discount%</TableCell>
            <TableCell className="ui-table-head">Tax</TableCell>
            <TableCell className="ui-table-head">Tax%</TableCell>
            <TableCell className="ui-table-head">Sales Price</TableCell>
            <TableCell className="ui-table-head">Total Sales Price</TableCell>
            <TableCell className="ui-table-head">Final Sales Price</TableCell>
            <TableCell className="ui-table-head">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {editedInvoices.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.qty} onChange={(e) => handleInputChange(e, index, 'qty')} />
                  ) : (
                    invoice.qty
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.costPrice} onChange={(e) => handleInputChange(e, index, 'costPrice')} />
                  ) : (
                    invoice.costPrice
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.margin} onChange={(e) => handleInputChange(e, index, 'margin')} />
                  ) : (
                    invoice.margin
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.marginPercentage} onChange={(e) => handleInputChange(e, index, 'marginPercentage')} />
                  ) : (
                    invoice.marginPercentage
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.discount} onChange={(e) => handleInputChange(e, index, 'discount')} />
                  ) : (
                    invoice.discount
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.discountPercentage} onChange={(e) => handleInputChange(e, index, 'discountPercentage')} />
                  ) : (
                    invoice.discountPercentage
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.tax} onChange={(e) => handleInputChange(e, index, 'tax')} />
                  ) : (
                    invoice.tax
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.taxPercentage} onChange={(e) => handleInputChange(e, index, 'taxPercentage')} />
                  ) : (
                    invoice.taxPercentage
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.salesPrice} onChange={(e) => handleInputChange(e, index, 'salesPrice')} />
                  ) : (
                    invoice.salesPrice
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.totalSalesPrice} onChange={(e) => handleInputChange(e, index, 'totalSalesPrice')} />
                  ) : (
                    invoice.totalSalesPrice
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <TextField value={invoice.finalSalesPrice} onChange={(e) => handleInputChange(e, index, 'finalSalesPrice')} />
                  ) : (
                    invoice.finalSalesPrice
                  )}
              </TableCell>
              <TableCell>
              {invoice.isEditing ? (
                    <div>
                      <Button className='ui-submit' onClick={() => handleSave(index)}>Save</Button>
                      <Button className='ui-submit' onClick={() => handleCancel(index)}>Cancel</Button>
                    </div>
                  ) : (
                    <Button className='ui-submit' onClick={() => handleEdit(index)}>Edit</Button>
                  )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default InvoiceGrid;
