import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import Dashboard from './Dashboard';
import '../components/data.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const Item = (props) => {


    const toast = useRef(null);
    const myDivRef = useRef(null);
    const useEffectCalled = useRef(false);
    const navigate = useNavigate();
    const location = useLocation();


    const [searchText, setSearchText] = useState('');
    const [itemName, setItemName] = useState('');
    const [batch, setBatch] = useState('');
    const [expiry, setExpiry] = useState('');
    const [quantity, setQuantity] = useState('');
    const [rate, setRate] = useState('');
    const [netRate, setNetRate] = useState('');
    const [offerRate, setOfferRate] = useState('');
    const [cgst, setCgst] = useState('');
    const [sgst, setSgst] = useState('');
    const [igst, setIgst] = useState('');
    const [hsn, setHsn] = useState('');
    const [billNo, setBillNo] = useState('');
    const [itemList, setItemList] = useState([]);
    const [records, setRecords] = useState([]);



    const myname = location.state && location.state.name;
    useEffect(() => {
        if (myname === 1 && myDivRef.current) {
            myDivRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [myname]);



    const yourPropValue = location.state && location.state.yourProp;
    useEffect(() => {
        if (!useEffectCalled.current) {
            fetchItemList();
            if (yourPropValue === 1) {
                showWarn();
            }
            useEffectCalled.current = true;
        }
    }, []);

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Item Added', life: 3000 });
    };
    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Item Deleted', life: 3000 });
    };
    const showWarn = () => {
        toast.current.show({ severity: 'warn', summary: 'Warning', detail: 'Item Updated', life: 3000 });
    }

    const handleFilter = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText);
    };

    const handleFilteredRecords = records.filter((item) =>
        item.itemName.toLowerCase().includes(searchText.toLowerCase())
    );


    const fetchItemList = async () => {
        try {
            const response = await axios.get('http://localhost:7071/api/v1/Items/getall');
            setRecords(response.data);
        } catch (error) {
            console.error('Error fetching item list:', error.message);
        }
    };

    const handleUpdate = (itemId) => {
        localStorage.setItem('itemId', itemId);
        navigate('/updateItem');
    };

    const handleDelete = async (itemId) => {
        try {
            await axios.delete(`http://localhost:7071/api/v1/Items/delete/${itemId}`);
            showError();
            fetchItemList();
            console.log(`Item with ID ${itemId} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting item:', error.message);
        }
    };



    const handleClick = async (event) => {
        event.preventDefault();
        showSuccess();
        const requestBody = {
            itemName: itemName,
            batch: batch,
            expiry: expiry,
            quantity: quantity,
            rate: rate,
            netRate: netRate,
            offerRate: offerRate,
            cgst: cgst,
            sgst: sgst,
            igst: igst,
            hsn: hsn,
            billNo: billNo,
        };
        try {
            const response = await axios.post('http://localhost:7071/api/v1/Items/save', requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            fetchItemList();
            console.log('Server Response:', response.data);
            setItemName('');
            setBatch('');
            setExpiry('');
            setQuantity('');
            setRate('');
            setNetRate('');
            setOfferRate('');
            setCgst('');
            setSgst('');
            setIgst('');
            setHsn('');
            setBillNo('');
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };
    const cancel = () => {
        navigate("/dashh");
    }

    return (
        <div>

            <div className='row'>
                <div className='col-2'>
                    <Dashboard />
                </div>
                <div className='container-fluid col-10'>
                    <div className=''>
                        <div className="row ">
                            <div className="container-fluid col-sm-10 py-3 align-center">
                                <div className="card">
                                    <div className="card-header bg-dark">
                                        <h3 className='text-center text-white'>Add New Item</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label>Item Name</label>
                                                        <input
                                                            type="text"
                                                            value={itemName}
                                                            onChange={(e) => setItemName(e.target.value)}
                                                            placeholder="Enter Item name"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Batch</label>
                                                        <input
                                                            type="text"
                                                            value={batch}
                                                            onChange={(e) => setBatch(e.target.value)}
                                                            placeholder="Enter Batch"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Expiry</label>
                                                        <input
                                                            type="date"
                                                            value={expiry}
                                                            onChange={(e) => setExpiry(e.target.value)}
                                                            placeholder="Enter Expiry"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Quantity</label>
                                                        <input
                                                            type="text"
                                                            value={quantity}
                                                            onChange={(e) => setQuantity(e.target.value)}
                                                            placeholder="Enter Quantity"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Rate</label>
                                                        <input
                                                            type="text"
                                                            value={rate}
                                                            onChange={(e) => setRate(e.target.value)}
                                                            placeholder="Enter Rate"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Net Rate</label>
                                                        <input
                                                            type="text"
                                                            value={netRate}
                                                            onChange={(e) => setNetRate(e.target.value)}
                                                            placeholder="Enter Net Rate"
                                                            className="form-control"
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label>CGST</label>
                                                        <input
                                                            type="text"
                                                            value={cgst}
                                                            onChange={(e) => setCgst(e.target.value)}
                                                            placeholder="Enter CGST"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>SGST</label>
                                                        <input
                                                            type="text"
                                                            value={sgst}
                                                            onChange={(e) => setSgst(e.target.value)}
                                                            placeholder="Enter SGST"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>IGST</label>
                                                        <input
                                                            type="text"
                                                            value={igst}
                                                            onChange={(e) => setIgst(e.target.value)}
                                                            placeholder="Enter IGST"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>HSN</label>
                                                        <input
                                                            type="text"
                                                            value={hsn}
                                                            onChange={(e) => setHsn(e.target.value)}
                                                            placeholder="Enter HSN"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Bill No</label>
                                                        <input
                                                            type="text"
                                                            value={billNo}
                                                            onChange={(e) => setBillNo(e.target.value)}
                                                            placeholder="Enter Bill No"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Offer Rate</label>
                                                        <input
                                                            type="text"
                                                            value={offerRate}
                                                            onChange={(e) => setOfferRate(e.target.value)}
                                                            placeholder="Enter Offer Rate"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row py-3">
                                                <div className="flex flex-wrap justify-content-center gap-3">

                                                    <Button label="Add" severity="success" raised onClick={handleClick} />
                                                    <Button label="Cancel" severity="danger" raised onClick={cancel} />

                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row' >
                <div className='col-2 mx-5 '></div>
                <div className='col-9'>

                    <div className="body">
                        <h3 className='text-center'>Item List</h3>
                        <div className='car flex flex-wrap justify-content-left'>
                            <span className="p-input-icon-left">
                                <i className="pi pi-search jht" />
                                <InputText placeholder="Search" onChange={handleFilter} />
                            </span>

                        </div>
                        <div className='cardy' ref={myDivRef}>
                            <DataTable value={handleFilteredRecords} showGridlines stripedRows highlightOnHover tableStyle={{ minWidth: '50rem' }} className="custom-datatable" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} >
                                <Column field="itemName" header="Item Name" style={{ width: '20rem' }} sortable></Column>
                                <Column field="batch" header="Batch" sortable></Column>
                                <Column field="expiry" header="ExpiryDate" style={{ width: '50rem' }} sortable></Column>
                                <Column field="quantity" header="Quantity" sortable></Column>
                                <Column field="rate" header="Rate" sortable></Column>
                                <Column field="netRate" header="Net Rate" sortable></Column>
                                <Column field="offerRate" header="Offer Rate" sortable></Column>
                                <Column field="cgst" header="CGST" sortable></Column>
                                <Column field="sgst" header="SGST" sortable></Column>
                                <Column field="igst" header="IGST" sortable></Column>
                                <Column field="hsn" header="HSN" sortable></Column>
                                <Column field="billNo" header="Bill No" sortable></Column>
                                <Column
                                    header="Actions"
                                    body={(rowData) => (
                                        <>
                                            <i className="pi pi-trash mx-1 my-2" style={{ fontSize: '1rem' }} onClick={() => handleDelete(rowData.itemId)}></i>
                                            <i className="pi pi-user-edit mx-1 my-2" style={{ fontSize: '1rem' }} onClick={() => handleUpdate(rowData.itemId)}></i>
                                        </>
                                    )}
                                ></Column>
                            </DataTable>
                        </div>
                    </div>
                    <Toast ref={toast} />

                </div>
            </div>
        </div>
    );
};

export default Item;
