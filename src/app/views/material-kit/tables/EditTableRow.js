import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTableRow = (props) => {
  const navigate = useNavigate();
const [users,setUsers]= useState([{
  name:''
}])

const { name,username, email,address} =users;

  // const [user, setUser]= useState([]);

  // const UpdateData = () => {
  //   const res = axios.post("http://localhost:3000/users", {
  //     name: "Ravi Kumar",
  //     email: "test@gmail.com",
  //   });

  //   navigate("/users/table");
  // };

const {id}=useParams();

async function  EditHandle(e){
  e.preventDefault();
  // setUser(...user,e.target.value)
  console.log()
  // console.log(e.target[0].value)
  // console.log(e.target[1].value)
  // console.log(e.target[2].value)
  // console.log(e.target[3].value)

  // axios.put(`http://localhost:3001/users/edit/${id}`,{
  //   name:e.target[0].value,
  //   email:e.target[1].value,
  //   username:e.target[2].value,
  //   address:e.target[3].value

  // }).then((res)=>{console.log("0000000000000000000",res)})
  // console.log("Your id", id)
    setUsers({...users,[e.target.value]:e.target.name})

    const res = await axios.put(`http://localhost:3000/users/${id}`, users);
  
    console.log("Result:", res)

  navigate('/users/table')
}
const loadUser= async ()=>{
  const res = await axios.get(`http://localhost:3000/users/${id}`)
  console.log("asaresult",res.data);
  setUsers(res.data)
}
useEffect(()=>{
  loadUser()
},[])




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
                value={name}
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
                value={email}
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
                value={username}
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
                value={name}
                id="inputPassword6"
                className="form-control"
                placeholder="Address"
              />
            </div>
          </div>
          
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
           <span><button className="btn btn-danger mt-2 mx-3" onClick={()=>{this.navigate('/users/table')}}>Cancel</button></span>
          </div>
      </form>
    </>
  );
};

export default EditTableRow;





// {
//   name:e.target[0].value,
//   hdsj :e.target[1].value,
//   gghh:e.target[2].value,
//   hhdhd:e.target[3].value

// }