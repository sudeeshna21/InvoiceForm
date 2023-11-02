import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './invoiceForm.css';
import { Typography } from '@mui/material';

// : Qty, Cost Price, Margin %, Margin, Sales Price, Total Sales Price,
//  Discount %, Discount, Tax %, Tax, and Final Sales Price

const InvoiceForm = ({addInvoice, setValue}) => {
  const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        qty: 0,
        costPrice: 0,
        marginPercentage: 0,
        margin:0,
        salesPrice: 0,
        totalSalesPrice: 0,
        discountPercentage: 0,
        discount: 0,
        taxPercentage: 0,
        tax: 0,
        finalSalesPrice: 0
      });
    
      const calculateValues = () => {
        const { qty, costPrice, marginPercentage, discountPercentage, taxPercentage } = formValues;
        
        const salesPrice = qty * costPrice;
        const totalSalesPrice = qty * salesPrice;
        const margin = (marginPercentage / 100) * salesPrice;
        const discount = (totalSalesPrice * (discountPercentage / 100));
        const tax = (totalSalesPrice * (taxPercentage / 100));
        const finalSalesPrice = totalSalesPrice - discount + tax;
    
        return {
          salesPrice,
          totalSalesPrice,
          margin,
          discount,
          tax,
          finalSalesPrice
        };
      };

      const handleInputChange = (field, value) => {
        setFormValues({
          ...formValues,
          [field]: value,
        });
      };
    
      useEffect(() => {
        const calculatedValues = calculateValues();
        setFormValues({
          ...formValues,
          ...calculatedValues
        });
      }, [formValues.qty, formValues.costPrice, formValues.marginPercentage, formValues.discountPercentage, formValues.taxPercentage]);

    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        const newInvoice = {
          ...formValues,
          ...calculateValues()
        };
        addInvoice(newInvoice);
        setValue(1)
        navigate('/grid')
      };
    
  return (
    <form onSubmit={handleFormSubmit}>
        <div className='ui-invoice-form'>
        <div className='ui-row'>
            <TextField
            className='ui-textfield mr-10 mb-10'
            label = 'Quantity'
            type='number'
            value={formValues.qty} 
            onChange={(e) => handleInputChange('qty', e.target.value)}
            />
            <TextField
            className='ui-textfield mr-10 '
            label = 'Cost Price'
            type='number'
            value={formValues.costPrice} 
            onChange={(e) => handleInputChange('costPrice', e.target.value)} 
            />
            <TextField
            className='ui-textfield mb-10'
            label = 'Margin%'
            type='number'
            value={formValues.marginPercentage} 
            onChange={(e) => handleInputChange('marginPercentage', e.target.value)}
            />
        </div>
        <div className='ui-row'>
            <TextField
            className='ui-textfield mr-10'
            label = 'Margin'
            type='number'
            value={formValues.margin} 
            onChange={(e) => handleInputChange('margin', e.target.value)} 
            />
             <TextField
            className='ui-textfield mr-10 mb-10'
            label = 'Sales Price'
            type='number'
            value={formValues.salesPrice} 
            onChange={(e) => handleInputChange('salesPrice', e.target.value)}
            />
            <TextField
            className='ui-textfield'
            label = 'Total Sales Price'
            type='number'
            value={formValues.totalSalesPrice} 
            onChange={(e) => handleInputChange('totalSalesPrice', e.target.value)}
            />
        </div>
        <div className='ui-row'>
            <TextField
            className='ui-textfield mr-10 mb-10'
            label = 'Discount %'
            type='number'
            value={formValues.discountPercentage} 
            onChange={(e) => handleInputChange('discountPercentage', e.target.value)}
            />
            <TextField
            className='ui-textfield mr-10'
            label = 'Discount'
            type='number'
            value={formValues.discount} 
            onChange={(e) => handleInputChange('discount', e.target.value)}
            />
            <TextField
            className='ui-textfield mb-10'
            label = 'Tax %'
            type='number'
            value={formValues.taxPercentage} 
            onChange={(e) => handleInputChange('taxPercentage', e.target.value)}
            />
        </div>
        <div className='ui-row'>
            <TextField
            className='ui-textfield mr-10'
            label = 'Tax'
            type='number'
            value={formValues.tax} 
            onChange={(e) => handleInputChange('tax', e.target.value)}
            />
        <TextField
            className='ui-textfield'
            label = 'Final Sales Price'
            type='number'
            value={formValues.finalSalesPrice} 
            onChange={(e) => handleInputChange('finalSalesPrice', e.target.value)}
            />
        </div>
        <Button variant="contained" className='ui-submit' type="submit">
            Submit
          </Button>
    </div>
    </form>
  )
}

export default InvoiceForm;