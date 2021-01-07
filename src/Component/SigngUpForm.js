import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="basecontainer">
      <form className="Form">
<h3>
<div className="title">FOOD BLOG APP </div>
</h3>
        <div className="header">SignUp</div>
        <label>UserName </label> <br />
        <input type="UserName" placeholder="Victory263" /> <br />
        <label>Password </label> <br />
        <input type="password" name="password" /> <br />
        <label>RepeatPassword </label> <br />
        <input type="Repeat password" placeholder="..........." /> <br />
        <button>
          <Link to="/login">SignUp </Link>
        </button>
        <h2>
          Already SignUp? LogIn <Link to="/login">LogIn Here </Link>
        </h2>
        <br />
      </form>
    </div>
  );
}

export default SignUp;
