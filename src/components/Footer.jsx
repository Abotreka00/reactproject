import React from 'react'
import './footer.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";


function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <h2>Shortly</h2>
            <div className="info">
                <div className="box">
                    <h3>features</h3>
                    <ul>
                        <li>span1</li>
                        <li>span2</li>
                        <li>span3</li>
                    </ul>
                </div>
                <div className="box box2">
                    <h3>resources</h3>
                    <ul>
                        <li>span1</li>
                        <li>span2</li>
                        <li>span3</li>
                    </ul>
                </div>
                <div className="box box3">
                    <h3>company</h3>
                    <ul>
                        <li>span1</li>
                        <li>span2</li>
                        <li>span3</li>
                    </ul>
                </div>
            </div>
            <div className="icons">
                <AiFillFacebook />
                <AiOutlineTwitter />
                <AiFillInstagram />
                <BsMessenger />
            </div>
        </div>
    </div>
  )
}

export default Footer