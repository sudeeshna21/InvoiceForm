import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './invoiceForm.css';

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
    
      const handleInputChange = (field, value) => {
        let updatedValues = { ...formValues, [field]: value };
      
        switch (field) {
          case 'costPrice':
          case 'marginPercentage':
            updatedValues.margin = (Number(updatedValues.costPrice) * Number(updatedValues.marginPercentage)) / 100;
            updatedValues.salesPrice = Number(updatedValues.costPrice) + (Number(updatedValues.costPrice) * Number(updatedValues.marginPercentage) / 100);
            updatedValues.totalSalesPrice = Number(updatedValues.costPrice) * Number(updatedValues.qty);
            updatedValues.finalSalesPrice = Number(updatedValues.totalSalesPrice) - Number(updatedValues.discount) + Number(updatedValues.tax) ;
            break;
          case 'margin':
            updatedValues.marginPercentage = (Number(updatedValues.margin) / Number(updatedValues.costPrice)) * 100;
            updatedValues.salesPrice = Number(updatedValues.costPrice) + Number(updatedValues.margin);
            updatedValues.totalSalesPrice = Number(updatedValues.costPrice) * Number(updatedValues.qty);
            updatedValues.finalSalesPrice = Number(updatedValues.totalSalesPrice) - Number(updatedValues.discount) + Number(updatedValues.tax) ;
            break;
          case 'totalSalesPrice':
          case 'discountPercentage':
            updatedValues.discount = (Number(updatedValues.totalSalesPrice) * Number(updatedValues.discountPercentage)) / 100;
            updatedValues.finalSalesPrice = Number(updatedValues.totalSalesPrice) - Number(updatedValues.discount) + Number(updatedValues.tax) ;
            break;
          case 'discount':
            updatedValues.discountPercentage = (Number(updatedValues.discount) / Number(updatedValues.totalSalesPrice)) * 100;
            updatedValues.finalSalesPrice = Number(updatedValues.totalSalesPrice) - Number(updatedValues.discount) + Number(updatedValues.tax) ;
            break;
          case 'taxPercentage':
            updatedValues.tax = (Number(updatedValues.totalSalesPrice) * Number(updatedValues.taxPercentage)) / 100;
            updatedValues.finalSalesPrice = Number(updatedValues.totalSalesPrice) - Number(updatedValues.discount) + Number(updatedValues.tax) ;
            break;
          case 'tax':
            updatedValues.taxPercentage = (Number(updatedValues.tax) / Number(updatedValues.totalSalesPrice)) * 100;
            updatedValues.finalSalesPrice = Number(updatedValues.totalSalesPrice) - Number(updatedValues.discount) + Number(updatedValues.tax) ;
            break;
          default:
            break;
        }
      
        setFormValues(updatedValues);
      };
      

    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        const newInvoice = {
          ...formValues,
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