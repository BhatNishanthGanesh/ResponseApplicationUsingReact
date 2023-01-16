import React from 'react'
import './Responses.css'
const Response = ({name,age,college,photo})=>{
    const handleClick = () =>{
        alert(`Hello, From ${name}`);
    }
return(
    <div className='Block'>
        
        <img src={photo} alt={name}/>
        <div class='Hi'>
        <h2>Name:{name} </h2>
        <p>Age:{age} </p>
        <p>College:{college} </p>
        </div>
        <button onClick={handleClick}>Click Me!!</button>
    </div>
)
}
export default Response