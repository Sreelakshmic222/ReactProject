import React, { useState } from 'react';
import axios from 'axios';
import './SalesEntry.css';

const SalesEntry = () => {
  const [header, setHeader] = useState({
    vr_no: '',
    vr_date: new Date().toISOString().slice(0, 10), // Today's date
    ac_name: '',
    ac_amt: '',
    status: 'A', // Default to Active
  });
  const [details, setDetails] = useState([]);

  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setHeader((prevHeader) => ({
      ...prevHeader,
      [name]: value,
    }));
  };

  const handleNew = () => {
    window.location.reload(); // Reloads the page to start with a new entry
  };

  const handleInsert = () => {
    // Create a new record for the detail table
    setDetails([...details, {
      srNo: details.length + 1,
      itemCode: '',
      itemName: '',
      qty: '',
      rate: '',
      amount: ''
    }]);
  };

  const handleSave = () => {
    // Send POST request to save data
    axios.post('http://5.189.180.8:8010/header/multiple', {
      header_table: header,
      detail_table: details,
    })
    .then(response => {
      // Handle success
      console.log(response.data);
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });
  };

  const handlePrint = () => {
    // Generate PDF document with form data
    // You can use a PDF generation library here
  };

  return (
    <div>
      <h2 style={{ backgroundColor: 'yellow' }}>HEADER</h2>
      <div className="header-container">
        <table className="sales-table">
          <tbody>
            <tr>
              <td>VR No:</td>
              <td><input type="number" name="vr_no" value={header.vr_no} onChange={handleHeaderChange} /></td>
              <td>VR Date:</td>
              <td><input type="date" name="vr_date" value={header.vr_date} onChange={handleHeaderChange} /></td>
              <td>Status:</td>
              <td>
                <select name="status" value={header.status} onChange={handleHeaderChange}>
                  <option value="A">Active</option>
                  <option value="I">Inactive</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Account Name:</td>
              <td colSpan="3"><input type="text" name="ac_name" value={header.ac_name} onChange={handleHeaderChange} /></td>
              <td>Account Amount:</td>
              <td><input type="number" name="ac_amt" value={header.ac_amt} onChange={handleHeaderChange} /></td>
            </tr>
          </tbody>
        </table>
        <div className="button-container">
          <button className="btn btn-primary mr-1" onClick={handleNew}>New</button><br />
          <button className="btn btn-primary mr-1" onClick={handleInsert} >Insert</button><br />
          <button className="btn btn-primary mr-1" onClick={handleSave}>Save</button><br />
          <button className="btn btn-primary" onClick={handlePrint}>Print</button><br />
        </div>
      </div>
    </div>
  );
};

export default SalesEntry;
