import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';
import {Link} from "react-router-dom";
import { Button } from 'primereact/button';
function UpdateItem() {
    const navigate = useNavigate();

    const [item, setItem] = useState({
        itemName: '',
        batch: '',
        expiry: '',
        quantity: '',
        rate: '',
        netRate: '',
        offerRate: '',
        cgst: '',
        sgst: '',
        igst: '',
        hsn: '',
        billNo: '',
    });

    useEffect(() => {
        const id = localStorage.getItem("itemId");
        const fetchItemById = async () => {
            try {
                const response = await axios.get(`http://localhost:7071/api/v1/Items/getbyid/${id}`);
                setItem(response.data);
            } catch (error) {
                console.error('Error fetching item:', error.message);
            }
        };
        fetchItemById();
    }, []);

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        });
    };

    const handleNavigation = () => {
        navigate("/item", { state: { yourProp: 1 } });
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        const id = localStorage.getItem("itemId");
        try {
            const response = await axios.put(`http://localhost:7071/api/v1/Items/update/${id}`, item, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Server Response:', response.data);
            setItem({
                itemName: '',
                batch: '',
                expiry: '',
                quantity: '',
                rate: '',
                netRate: '',
                offerRate: '',
                cgst: '',
                sgst: '',
                igst: '',
                hsn: '',
                billNo: '',
            });
            handleNavigation();

        } catch (error) {
            console.error('Error updating Item:', error.message);
        }
    };
    const cancel=()=>{
        navigate("/item");
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
                                        <h3 className='text-center text-white'>Update Item</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label>Item Name</label>
                                                        <input
                                                            type="text"
                                                            value={item.itemName}
                                                            onChange={handleChange}
                                                            name="itemName"
                                                            placeholder="Enter Item name"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Batch</label>
                                                        <input
                                                            type="text"
                                                            value={item.batch}
                                                            onChange={handleChange}
                                                            name="batch"
                                                            placeholder="Enter Batch"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Expiry</label>
                                                        <input
                                                            type="text"
                                                            value={item.expiry}
                                                            onChange={handleChange}
                                                            name="expiry"
                                                            placeholder="Enter Expiry"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Quantity</label>
                                                        <input
                                                            type="text"
                                                            value={item.quantity}
                                                            onChange={handleChange}
                                                            name="quantity"
                                                            placeholder="Enter Quantity"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Rate</label>
                                                        <input
                                                            type="text"
                                                            value={item.rate}
                                                            onChange={handleChange}
                                                            name="rate"
                                                            placeholder="Enter Rate"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Net Rate</label>
                                                        <input
                                                            type="text"
                                                            value={item.netRate}
                                                            onChange={handleChange}
                                                            name="netRate"
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
                                                            value={item.cgst}
                                                            onChange={handleChange}
                                                            name="cgst"
                                                            placeholder="Enter CGST"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>SGST</label>
                                                        <input
                                                            type="text"
                                                            value={item.sgst}
                                                            onChange={handleChange}
                                                            name="sgst"
                                                            placeholder="Enter SGST"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>IGST</label>
                                                        <input
                                                            type="text"
                                                            value={item.igst}
                                                            onChange={handleChange}
                                                            name="igst"
                                                            placeholder="Enter IGST"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>HSN</label>
                                                        <input
                                                            type="text"
                                                            value={item.hsn}
                                                            onChange={handleChange}
                                                            name="hsn"
                                                            placeholder="Enter HSN"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Bill No</label>
                                                        <input
                                                            type="text"
                                                            value={item.billNo}
                                                            onChange={handleChange}
                                                            name="billNo"
                                                            placeholder="Enter Bill No"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Offer Rate</label>
                                                        <input
                                                            type="text"
                                                            value={item.offerRate}
                                                            onChange={handleChange}
                                                            name="offerRate"
                                                            placeholder="Enter Offer Rate"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row py-3">
                                            <div className="flex flex-wrap justify-content-center gap-3">
                                                    
                                                    <Button label="Update"  severity="success" raised onClick={handleUpdate} />
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
        </div>
    )
}

export default UpdateItem;
