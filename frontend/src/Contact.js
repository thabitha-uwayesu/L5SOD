import React from 'react'
import { Link } from "react-router-dom";

function Contact() {
  return (
<center>

    <h1>contact</h1>

    <h6>
      <p>
        to those who wants to talk to us privately may find us on this address:<br></br>
        <b>Telphone:</b>0789922334<br></br>
        <b>Email:</b>INDREAM@gmail.com<br></br>
       <b>Location:</b>KIGALI:nyabugogo :inkundamahoro.
      </p>
    </h6>

    <button>
              <Link to="/Dashboard" className="text-decoration-none">
                  back
                </Link>
                </button>

    </center>
  )
}

export default Contact;