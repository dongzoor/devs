import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import { MdArrowBack } from "react-icons/md";

function Register() {
  return (
    <div className="container">
      <div className="content">
        <Link to="/">
          <MdArrowBack size="24" style={{ margin: 10 }} />
        </Link>
        <h1 class="form-title">Register Here</h1>
        <div>
          <form className="register-form">
            <input type="text" placeholder="ID(EMAIL)" />
            <input type="text" placeholder="PASSWORD" />
            <input type="text" placeholder="VERIFY PASSWORD" />
            <input type="text" placeholder="PHONE NUMBER" />
            <input type="text" placeholder="CODE" />
            <input type="email" placeholder="EMAIL ADDRESS" />
            <input type="checkbox" id="check" />
            <label id="check" htmlFor="check" />
            <span> Agree to terms</span>
            <button type="button" className="register_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
