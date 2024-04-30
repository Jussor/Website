import React from 'react'
import "./Path.css";
import { GoDotFill } from "react-icons/go";
const Path = (props) => {
  return (
    <div className='path'>
        <div className='container'>
            
                <div className='path-flow'>
                    <div className='topic'><p>{props.route.topic}</p></div>
                    <div className='path-links'><p> {'<'}  {props.route.home} {'>'}  {props.route.newpage} <span><GoDotFill/></span></p></div>
                    
                </div>
            
        </div>
    </div>
  )
}

export default Path