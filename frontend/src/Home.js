import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <center>
      <h1>welcome to the INDREAM TECH</h1>
      <p><h2>
        if we are together show as by create account  or Login if you have account</h2></p>

        <button>
          <Link to="/Register" className="text-decoration-none">
              Register
            </Link>
        </button>
&&&&&&&&&
        <button>
          <Link to="/Login" className="text-decoration-none">
              Login
            </Link>
        </button>

    </center>
  )
}

export default Home;