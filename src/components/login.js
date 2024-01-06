import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

const Login = () => {
    const [Name, setname] = useState('');
    const [email, setemail] = useState('');
    const navigate = useNavigate();
    const namechange = (e) => {
        setname(e.target.value);
    }
    const emailchange = (e) => {
        setemail(e.target.value);
    }
    const onsubmit = (e) => {
        e.preventDefault();
        if (Name === "chinmay" && email === "chin@gmail.com") {
            navigate("/dashh")
        }
        else {
            alert("Wrong credentials");
        }
        console.log(Name);
    }
    return (
        <div className='row'>
            <div className='col-2'>
                <Dashboard></Dashboard>
            </div>
            <div className='bg-black col-10 container my-3'>
                <h1 className='text-white text-center'>Login Page</h1>
                <form className='my-3'>
                    <div className='row'>
                        <div className='col-6'>
                            <label className='text-white'>Name</label>
                            <input className='form-control my-1' placeholder='Name' value={Name} onChange={namechange} type='text' ></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <label className='text-white'>Email</label>
                            <input className='form-control' placeholder='Name' value={email} onChange={emailchange} type='email'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <button className='btn btn-primary my-3' onClick={onsubmit}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login