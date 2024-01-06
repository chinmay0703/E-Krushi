import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import {
  faArrowDown, faArrowUp, faArrowRight,
  faCloud, faBook, faChartSimple, faCog, faBuildingShield,
  faSignOutAlt, faMoneyBillTransfer,
  faFileExcel, faCartShopping, faUser, faDashboard,
  faMinus,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Purchase = () => {
  const [recordsCustomer, setRecordsCustomer] = useState([]);
  const [recordsItem, setRecordsItem] = useState([]);

  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const [quantity, setQuantity] = useState(1);
  const [itemRate, setItemRate] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [customerDetails, setCustomerDetails] = useState({});
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    fetchVendorList();
    fetchItemList();
  }, []);

  useEffect(() => {
    const calculateTotalAmount = () => {
      const ratt = itemRate * quantity;
      setTotalAmount(ratt);
    };

    calculateTotalAmount();
  }, [itemRate, quantity]);

  const fetchVendorList = async () => {
    try {
        const response = await axios.get('http://localhost:7071/api/vendors/getall');
        setRecordsCustomer(response.data);
    } catch (error) {
        console.error('Error fetching vendor list:', error.message);
    }
};
  const fetchItemList = async () => {
    try {
      const response = await axios.get('http://localhost:7071/api/v1/Items/getall');
      setRecordsItem(response.data);
    } catch (error) {
      console.error('Error fetching item list:', error.message);
    }
  };

  const handleCustomerChange = async (e) => {
    const customerId = e.target.value;

    try {
      const response = await axios.get(`http://localhost:7071/api/vendors/getbyid/${customerId}`);
      setCustomerDetails(response.data);
    } catch (error) {
      console.error('Error fetching customer details:', error.message);
    }

    setSelectedCustomer(customerId);
  };

  const handleItemChange = async (e) => {
    const itemId = e.target.value;

    try {
      const response = await axios.get(`http://localhost:7071/api/v1/Items/getbyid/${itemId}`);
      setItemRate(response.data.rate);
      setItemDetails(response.data);

    } catch (error) {
      console.error('Error fetching item rate:', error.message);
    }

    setSelectedItem(itemId);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity || 0);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(selectedItem);
    console.log(totalAmount);
    console.log(customerDetails);
    console.log(itemRate);
  };
  const additemclick = (e) => {
    e.preventDefault();
    console.log(selectedItem);
    const selectedItemString = JSON.stringify(selectedItem);
    localStorage.setItem("itemDetails", selectedItemString);
  };
//   const columns = [
//     { name: "Item Name", selector: (row) => row.itemName, sortable: true, width: '150px' },
//     { name: "Batch", selector: (row) => row.batch, sortable: true },
//     { name: "Expiry", selector: (row) => row.expiry, sortable: true, width: '150px' },
//     { name: "Quantity", selector: (row) => row.quantity, sortable: true, width: '150px' },
//     { name: "Rate", selector: (row) => row.rate, sortable: true, width: '150px' },
//     { name: "Net Rate", selector: (row) => row.netRate, sortable: true, width: '150px' },
//     { name: "Offer Rate", selector: (row) => row.offerRate, sortable: true, width: '150px' },
//     { name: "CGST", selector: (row) => row.cgst, sortable: true, width: '150px' },
//     { name: "SGST", selector: (row) => row.sgst, sortable: true, width: '150px' },
//     { name: "IGST", selector: (row) => row.igst, sortable: true, width: '150px' },
//     { name: "HSN", selector: (row) => row.hsn, sortable: true, width: '150px' },
//     { name: "Bill No", selector: (row) => row.billNo, sortable: true, width: '150px' },
//     {
//         name: "Actions",
//         cell: (rowData) => (
//             <>
//                 <i className="pi pi-trash mx-1 my-2" style={{ fontSize: '1rem' }} ></i>
//                 <i className="pi pi-user-edit mx-1 my-2" style={{ fontSize: '1rem' }} ></i>
//             </>
//         ),
//     },
// ];
// const handleFilter = (e) => {
//   const searchText = e.target.value;
//   setSearchText(searchText);
// };

// const handleFilteredRecords = records.filter((item) =>
//   item.itemName.toLowerCase().includes(searchText.toLowerCase())
// );

  return (
    <div>
    <div className='row'>
        <div className='col-2'>
            <Dashboard />
        </div>
        
        
        <div className='container-fluid col-10'>
        {/* <div>

<h1 className='text-center'>Purchase</h1>
</div> */}
            <div className=''>
                <div className="row ">
                    <div className="container-fluid col-sm-10 py-3 align-center">
                        <div className="card">
                           <div className='card-header bg-dark text-white py-3'>
                            
                            <h5>Vendor Information</h5>
                            
                            </div>
                            <div className="card-body">
                                
                                <form>
                                    <div className="row">
                                        <div className="col-4">
                                        <div className="form-group ">
                      <label>Select a Vendor</label>
                      <select
                        value={selectedCustomer}
                        onChange={handleCustomerChange}
                        className="form-control"
                        placeholder='Select a customer'
                      >
                        <option value="" disabled>Select a Vendor</option>
                        {recordsCustomer.map((customer) => (
                          <option key={customer.vId} value={customer.vId}>
                            {customer.name}
                          </option>
                        ))}
                      </select>
                    </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Address"
                                                    value={customerDetails.address}
                                                   
                                                />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    value={customerDetails.email}
                                                  
                                                />
                                            </div>
                                        </div>
                                    </div> 
                                    <div className='row'>
                                      <div className='col-4'>
                                      <div className="form-group">
                                                <label>Contact</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Contact"
                                                    value={customerDetails.contact}
                                                  
                                                />
                                            </div>
                                      </div>
                                      <div className='col-4'>
                                      <div className="form-group">
                                                <label>Gst Invoice</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Gst Invoice"
                                                    value={customerDetails.gstInvoice}
                                                  
                                                />
                                            </div>
                                      </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
               
               
            </div>
            
            <div className='row '>
              <div className=' container-fluid col-sm-10  align-center'>

                     <div className="card ">
                     <div className='card-header bg-dark text-white py-3'>
               
                        <div className=''>
                        <h5>Item Information</h5>
                        </div>
                        
                          {/* <div className='col mx-5'>
                          
                          <span className="icon"><FontAwesomeIcon icon={faPlus} size='lg' /></span>
                            
                          </div>
                          <div className='col'>
                        <span className="icon"><FontAwesomeIcon icon={faMinus} size='lg' /></span>
                        
                          </div>
 */}

                            
                            </div>
                   
                    <div className="card-body ">
                        <form className=''>
                            <div className="row ">
                                <div className="col-sm-4">
                                <div className="form-group">
                     <label>Batch No</label>
                    <select
                       value={selectedItem}
                   onChange={handleItemChange}
                className="form-control"
                  placeholder='Select an item'
                   >
                           <option value="" disabled>Batch No</option>
                        {recordsItem.map((item) => (
                              <option key={item.itemId} value={item.itemId}>
                        {item.batch}
                     </option>
                     ))}
                   </select>
                   </div>
                                    <div className="form-group ">
                                        <label>Item Name</label>
                                        <input
                                            type="text"
                                            value={itemDetails.itemName}
                                            placeholder="Item Name"
                                            className="form-control"
                                        />
                                    </div>
                                    
                                    <div className="form-group ">
                                        <label>Expiry</label>
                                        <input
                                            type="date"
                                            value={itemDetails.expiry}
                                            placeholder="Expiry"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group ">
                                        <label>Quantity</label>
                                        <input
                                            type="text"
                                            value={itemDetails.quantity}
                                            placeholder="Quantity"
                                            className="form-control"
                                        />
                                    </div>
                                    
                                  
                                    
                                </div>
                                <div className="col-sm-4">
                                   
                                    <div className="form-group">
                                        <label>IGST</label>
                                        <input
                                            type="text"
                                            value={itemDetails.igst}
                                            placeholder="IGST"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>HSN</label>
                                        <input
                                            type="text"
                                            value={itemDetails.hsn}
                                            placeholder="HSN"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Bill No</label>
                                        <input
                                            type="text"
                                            value={itemDetails.billNo}
                                            placeholder="Bill No"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Rate</label>
                                        <input
                                            type="text"
                                            value={itemDetails.rate}
                                            placeholder="Rate"
                                            className="form-control"
                                        />
                                    </div>
                                   
                                </div>
                                <div className='col-sm-4'>
                                <div className="form-group">
                                        <label>Offer Rate</label>
                                        <input
                                            type="text"
                                            value={itemDetails.offerRate}
                                            placeholder="Offer Rate"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>CGST</label>
                                        <input
                                            type="text"
                                            value={itemDetails.cgst}
                                            placeholder="CGST"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>SGST</label>
                                        <input
                                            type="text"
                                            value={itemDetails.sgst}
                                            placeholder="SGST"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Net Rate</label>
                                        <input
                                            type="text"
                                            value={itemDetails.netRate}
                                            placeholder="Net Rate"                                            className="form-control"
                                        />
                                    </div>

                                </div>
                            </div>
                        </form>
                       
                    </div>
                </div>

                </div>

            </div>
            <div className="row ">
                    <div className="container-fluid col-sm-10 py-3 align-center">
                        <div className="card">
                           
                            <div className="card-body">
                                <form>
                                <div className="row">
                        <div className="form-group col">
                          <label>Order Quantity</label>
                          <input
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="form-control"
                          />
                        </div>
                     
                      <div className="col ">
                      
                          <div className="form-group">
                            <label>Total Order Amount</label>
                            <input
                              // type="number"
                              value={totalAmount}
                              className="form-control"
                              min="1"
                            />
                          </div>
                       
                      </div>
                      </div>
                                   
                                    
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                  <div className='col-1 mx-1'></div>
                
                      <div className="text-start col-4">
                        <button className="btn btn-success text-center  m-1" type="submit" onClick={handleClick}>Create order</button>
                        <button className="btn btn-primary text-center  m-1" type="submit" onClick={additemclick}>Add Item</button>
                        <button className="btn btn-danger text-center  m-1" type="submit" onClick={additemclick}>Cancel</button>
                      </div>
                

                </div>
            {/* <div className='row'>
            <div className='table cardy'>
                            <DataTable columns={columns} data={handleFilteredRecords} pagination keyField="itemId" selectableRows />
                        </div>
            </div> */}
        </div>
        
    </div>
    {/* <div className='row'>
        <div className='col-2'></div>
        <div className='col-10'>

            <div className="body">
                <h1 className='text-center'>Customer List</h1>
                
                <div className='car flex flex-wrap justify-content-left'>
                    <span className="p-input-icon-left">
                        <i className="pi pi-search jht" />
                        <InputText placeholder="Search" onChange={handleFilter}/>
                    </span>

                </div>
                <div className='table cardy'>
                    <DataTable columns={columns} data={handleFilteredRecords} pagination keyField="customerId" selectableRows />
                </div>
            </div>
            <Toast ref={toast} />
        </div>
    </div> */}
    </div>

    
  );
};

export default Purchase;


// <div className='container-fluid col-6'>
// <div className='row'>
// <div className='card'>
//     <h3 className='text-center'>Selected Items</h3>
    
//       {selectedItem ? (
//         <table className='table table-striped'>
//           <thead className='table table-success'>
//             <tr>
            
//               <th>ItemName</th>
//               <th>ItemRate</th>
//               <th>ItemQuantity</th>
//               <th>TotalAmount</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
           
//               <td>{itemDetails.itemName}</td>
//               <td>{itemDetails.rate}</td>
//               <td>{quantity}</td>
//               <td>{totalAmount}</td>
//               <td> <i className="pi pi-trash mx-1" style={{ fontSize: '1rem' }}></i></td>
//             </tr>
//           </tbody>
//         </table>
//       ) : (
//         <p className='text-center my-4'>No item selected</p>
//       )}

    
//   </div>
// </div>
// </div>