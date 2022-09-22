import React from "react";

const EditTableRow = () => {
  return (
    <div>
    <div>
    <h2 style={{color:'black', textAlign:'center', fontWeight:'700'}}> Update Users Detail</h2>
    </div>
    
      <form>
    <div className='container d-flex ' style={{justifyContent:'center', alignItems:'center'}}>
    

        <div className="row g-3 align-items-center m-3 col-md-2">
          <div className="col-auto">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              placeholder="Name"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center m-3 col-md-2">
          <div className="col-auto">
            <input
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
              id="inputPassword6"
              className="form-control"
              placeholder="Address"
            />
          </div>
        </div>
        <div className='mt-3'>
            <button className='btn btn-primary'>Submit</button>
        </div>

    </div>

       
      </form>
    </div>
  );
};

export default EditTableRow;
