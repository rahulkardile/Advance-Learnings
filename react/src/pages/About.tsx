import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const About = () => {

    // useHistory is relpace with useNavigate 
    const location = useLocation();
    const navigation = useNavigate();

    console.log(navigation("/", {state: { from: 'MyComponent' } }));
    
    return (
        <div>
            <p>This is about Page with location</p>
            {
                location.search ? <h1>Nice to see you admin</h1> : <h1>Your Not admin</h1>
            }
            <button onClick={()=>{navigation(-1)}}>Go Back</button>
            <button onClick={()=>{navigation(1)}}>Go Forward</button>
           
            <button onClick={()=>{navigation("/", {state: "this is from about"})}}>Share state to home</button>


        </div>

    )
}

export default About