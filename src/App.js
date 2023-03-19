import React from "react"
import Image from "./components/Image"
import Contact from "./components/Contact"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App(){
    return(
        <div className="card">
            <Image/>
            <Contact/>
            <Main/>
            <Footer/>
        </div>
    )
}