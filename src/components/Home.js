import React from 'react'
import "./cssfiles/Home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    const change=()=>{
        navigate("/dashh")
        
    }
    return (
        <div className="container py-5">
            <div className="row m-5 no-gutters shadow-lg">
                <div className="col-md-6 d-none d-md-block">
                    <img
                        src="https://content.jdmagicbox.com/comp/buldhana/i7/9999p7262.7262.130110145009.b5i7/catalogue/krushi-seva-kendra-motala-buldhana-fertilizer-dealers-oxsxw.jpg"
                        className="img-fluid imge" style={{ minWidth: '100%' }}
                        alt="Login Banner"
                    />
                </div>
                <div className="col-md-6 bg-white p-5">
                    <h2 className="pb-3 text-center">Login Here</h2>
                    <div className="form-style">
                        <form>
                            <div className="form-group pb-3 py-5">
                                <label>Email</label>
                                <input type="email" placeholder="Enter UserId" className="form-control" />
                            </div>
                            <div className="form-group pb-3 py-3">
                                <label>Password</label>
                                <input type="password" placeholder="Enter Password" className="form-control" />
                            </div>
                            <div className="pb-2 py-3">
                                <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2" onClick={change}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home