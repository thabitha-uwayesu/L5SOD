import React from 'react'
import { Link } from "react-router-dom";

function About() {
  return (
    <center>
    <h1><u>About us</u></h1>
    <h5>
    indream is great new company that sell the electronic device and repair it<br></br>
    we repair the Telphone and tv and radios and camera .  and we have the bonus<br></br>
    of make the top up to those who want to exchange the old device to the new one<br></br>
    
    </h5>

    <button>
                  <Link to="/dashboard" className="text-decoration-none">
                      back
                    </Link>
                    </button>
    </center>
  )
}

export default About;