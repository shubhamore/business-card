import React from "react"

export default function Contact(){
    return(
        <div className="contact">
            <h1 className="name">Laura Smith</h1>
            <h3 className="pos">Frontend Developer</h3>
            <p className="web">laurasmith.website</p>
            <div className="btn-grp">
                <button id="email"><img src={require("../images/Mail.png")}></img>Email</button>
                <button id="linkedin"><img src={require("../images/linkedin.png")}></img>LinkedIn</button>
            </div>
        </div>
    )
}