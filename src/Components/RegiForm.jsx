import React from 'react';

const RegiForm = () => {
  return (
    <div>
      <div className="container-register">
        <div className="title">Registration form</div>
        <div className="form">
          <div className="input_field">
            <label>First Name</label>
            <input type="text" className="input"></input>
          </div>

          <div className="input_field">
            <label>Last Name</label>
            <input type="text" className="input"></input>
          </div>
          <div className="input_field">
            <label>Gender</label>
            <div className="selectgender">
              <select>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
          </div>

          <div className="input_field">
            <label>Email</label>
            <input type="text" className="input"></input>
          </div>

          <div className="input_field">
            <label>Phone Number</label>
            <input type="text" className="input"></input>
          </div>
          <div className="input_field">
            <label>Address</label>
            <textarea className="textarea"></textarea>
          </div>
          <div className="input_field terms">
            <label className="check">
              <input type="checkbox"></input>
              <span className="checkmark"></span>
            </label>
            <p>I agree to terms and conditions</p>
          </div>
          <div className="input_field">
            <input type="submit" value="Register" className="register"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegiForm;
