import React from "react";

const EditTableRow = () => {
  return (
    <div>
      <form>
    <div class='container'>
    <h2 style={{color:'blue'}}> Update Users Detail</h2>

        <div class="row g-3 align-items-center m-3 col-md-2">
          <div class="col-auto">
            <input
              type="text"
              id="inputPassword6"
              class="form-control"
              placeholder="Name"
            />
          </div>
        </div>

        <div class="row g-3 align-items-center m-3 col-md-2">
          <div class="col-auto">
            <input
              type="text"
              id="inputPassword6"
              class="form-control"
              placeholder="Email"
            />
          </div>
        </div>

        <div class="row g-3 align-items-center m-3 col-md-2">
          <div class="col-auto">
            <input
              type="text"
              id="inputPassword6"
              class="form-control"
              placeholder="Username"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center m-3 col-md-2">
          <div class="col-auto">
            <input
              type="text"
              id="inputPassword6"
              class="form-control"
              placeholder="Address"
            />
          </div>
        </div>
        <div class='m-3'>
            <button class='btn btn-primary'>Submit</button>
        </div>

    </div>

       
      </form>
    </div>
  );
};

export default EditTableRow;
