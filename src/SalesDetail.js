import React, { useEffect, useState } from 'react';
import './SalesDetail.css'
import axios from 'axios';

const SalesDetail = () => {
  const [details, setDetails] = useState([
    { srNo: 1, itemCode: '', itemName: '', qty: '', rate: '', amount: '' }
  ]);

  const [items, setItems] = useState([]);
  const [selectedItemCode, setSelectedItemCode] = useState('');
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    // Fetch items from server when component mounts
    fetchItems();
  }, []);

  const fetchItems = () => {
    // Fetch items from the server using GET request
    axios.get('http://5.189.180.8:8010/item')
      .then(response => {
        setItems(response.data); // Assuming response.data is an array of items
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  };

  const handleItemCodeChange = (index, e) => {
    const { value } = e.target;
    const newDetails = [...details];
    
    // Update the item code for the specified row
    newDetails[index]['itemCode'] = value;
  
    // Find the corresponding item name based on the selected item code
   const selectedItem = items.find(item => item.item_code === value);
  if (selectedItem) {
    newDetails[index]['itemName'] = selectedItem.item_name;
  } else {
    newDetails[index]['itemName'] = '';
  }
  
    setDetails(newDetails);
  };

  const handleDetailChange = (index, e) => {
    const { name, value } = e.target;
    const newDetails = [...details];
    newDetails[index][name] = value;
    if (name === 'qty' || name === 'rate') {
      const qty = parseFloat(newDetails[index]['qty']);
      const rate = parseFloat(newDetails[index]['rate']);
      newDetails[index]['amount'] = isNaN(qty) || isNaN(rate) ? '' : (qty * rate).toFixed(2);
    }
    setDetails(newDetails);
  };

  const addDetailRow = () => {
    setDetails([...details, { srNo: details.length + 1, itemCode: '', itemName: '', qty: '', rate: '', amount: '' }]);
  };
  const removeDetailRow = (index) => {
    const newDetails = [...details];
    newDetails.splice(index, 1);
    setDetails(newDetails);
  };
  const getTotalAmount = () => {
    return details.reduce((total, detail) => {
      return total + (parseFloat(detail.amount) || 0);
    }, 0).toFixed(2);
  };

  return (
    <div>
      <h2 style={{ backgroundColor: 'orange' }}>DETAIL</h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Item Code</th>
            <th>Item Name</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.srNo}</td>
              <td>
        <select id="itemCode" value={detail.itemCodee} onChange={(e) => handleItemCodeChange(index, e)}>
          <option value="">Select Item Code</option>
          {items.map(item => (
            <option key={item.item_code} value={item.item_code}>{item.item_code}</option>
          ))}
        </select></td>
              <td>
              <input type="text" id="itemName" value={detail.itemName} readOnly /></td>
              <td><input type="number" name="qty" value={detail.qty} onChange={(e) => handleDetailChange(index, e)} /></td>
              <td><input type="number" name="rate" value={detail.rate} onChange={(e) => handleDetailChange(index, e)} /></td>
              <td>{detail.amount}</td>
              <td><button onClick={() => removeDetailRow(index)}>Remove</button></td>
            </tr>
          ))}
          <tr>
            <td colSpan="5" style={{ textAlign: 'right' }}>Total:</td>
            <td>{getTotalAmount()}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={addDetailRow}>Add Row</button>
      {/* <button onClick={removeDetailRow}>Remove Row</button> */}
    </div>
  );
};

export default SalesDetail;
