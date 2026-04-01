import React from "react";
import { Link } from "react-router-dom";

function Register() {
 


  return (
    <center>
    <div>
      <h2>Register</h2>

      <input
        placeholder="Full Name"
       
      /><br/><br/>

      <input
        placeholder="Email"
       
      /><br/><br/>

      <input
        type="password"
        placeholder="Password"
       
      /><br/><br/>

      <input
        type="password"
        placeholder="Confirm Password"
        
      /><br/><br/>

 <button type="submit" className="btn btn-primary w-10 px-2 me-1">
                      Register
                    </button>
    </div><br></br><br></br>

<button>
          <Link to="/" className="text-decoration-none">
              back
            </Link>
        </button>

    </center>
  );
}

export default Register;