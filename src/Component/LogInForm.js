import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
function LogIn() {

const handleClick =(e)=>{
e.preventDefault()
}
  return (
    <div className="basecontainer">
      <form className="Form">
        <p className="header">LogIn</p>
        <label>Email </label> <br />
        <input type="email" placeholder="email@.com" /> <br />
        <label>Password </label> <br />
        <input type="password" name="password" /> <br />
        <button onClick={handleClick}>
          {" "}
          <Link to="/post">LogIn </Link>
        </button>
        <h2 className="forgot-pass"> Forgot Password?</h2>
      </form>
    </div>
  );
}

export default LogIn;
