import React from 'react'
import { useNavigate } from 'react-router-dom'

const NuevoContacto = () => {
    return (
        <div>
            <form className="container">
                <h1 className="text-center">Add a New Contact</h1>
                <div className="col-12">
                    <label for="inputFullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputFullName" placeholder="Full Name" />
                </div>
                <div className="col-12">
                    <label for="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder='Enter Email' />
                </div>
                <div className="col-12">
                    <label for="inputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Enter Phone" />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter Adress" />
                </div>
                <div className="col-12 mt-2">
                    <button type="submit" className="btn btn-primary"
                    onClick={()=>{
                        // post 
                        useNavigate("/")
                    }}>Save</button>
                </div>
            </form>

        </div>
    )
}

export default NuevoContacto