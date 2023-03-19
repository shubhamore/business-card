import React from "react"

export default function Footer(){
    return(
        // <h1>footer</h1>
        <footer>
            <a href="#"><img src={require("../images/Twitter.png")}></img></a>
            <a href="#"><img src={require("../images/Facebook.png")}></img></a>
            <a href="#"><img src={require("../images/Instagram.png")}></img></a>
            <a href="#"><img src={require("../images/GitHub.png")}></img></a>
        </footer>
    )
}