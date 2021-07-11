import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <Link to="/"><h1 className="f-head">RateMy<span className="f-h-c">College</span></h1></Link>
            <Link to="/Request"><h2 className="f-ac">Add college</h2></Link>
            <Link><h2 className="f-abt">about us </h2></Link>
            {/* <h2 className="f-c">Contact us</h2> */}
            <a href="mailto:bjmanoj7@gmail.com"><h2 className="f-c">bjmanoj7@gmail.com</h2></a>
        </div>
    )
}
