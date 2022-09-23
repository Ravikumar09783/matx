import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddTableRow = () => {
    const navigate= useNavigate()

    // const[users, setUsers] = useState({name:''})
    // const {name,email,username,address}= users;

    const EditHandle= (e)=>{
        e.preventDefault()
        // setUsers({...users,[e.target.value]:e.target.name})
        // axios.post('http://localhost:3000/users',users)
        // navigate('/users/table')
        axios.post('http://localhost:3000/users',{
            name:e.target[0].value,
            email:e.target[1].value,
            username:e.target[2].value,
            email:e.target[3].value
        })
        navigate('/users/table')
        console.log(e)
    }





  return (
    <>
      <div>
        <h2 style={{ color: "grey", textAlign: "center", fontWeight: "700" }}>
         
          Update Users Detail
        </h2>
      </div>

      <form onSubmit={EditHandle}>
        <div
          className="container d-flex "
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div className="row g-3 align-items-center m-3 col-md-2">
            <div className="col-auto">
              <input
                type="text"
                name="name"
                id="inputPassword6"
                className="form-control"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center m-3 col-md-2">
            <div className="col-auto">
              <input
                name="name"
                type="text"
                id="inputPassword6"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center m-3 col-md-2">
            <div className="col-auto">
              <input
                type="text"
                name="name"
                id="inputPassword6"
                className="form-control"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="row g-3 align-items-center m-3 col-md-2">
            <div className="col-auto">
              <input
                type="text"
                name="name"
                id="inputPassword6"
                className="form-control"
                placeholder="Address"
              />
            </div>
          </div>
          
            <button type="submit" className="btn btn-success mt-2">Add user</button>
           
          </div>
      </form>
    </>
  );
  
}

export default AddTableRow