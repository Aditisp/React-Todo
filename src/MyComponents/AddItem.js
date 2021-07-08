import React, { Component, useReducer, useState } from 'react' ;
import 'A:/React/app/demoapp/src/MyComponents/AddItem.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const AddItem = () => {
    let history = useHistory();
    const [tasks,setTask] = useState({
        title: ""
    });

    const {title} = tasks;

    const onInputChange = e =>{
        setTask({...tasks,[e.target.name]: e.target.value})

    };
    
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/tasks",tasks);
        history.push("/Home");

    };
    
 return (
 <>
 <div style={{ position:"relative", left:"500px", top:"5px"}}>
 <form onSubmit={e => onSubmit(e)}>
 <h3>Add a Task:</h3><br/>
 <input 
 style ={{padding: "8px" , height: "50px", width:"400px"}} 
 type="text" 
 name="title"
 value= {title}
 onChange ={e => onInputChange(e)} 
 />
 <br/><br/>
 <button class="button3">Submit</button>
 </form>
 </div>
 </>
    );
};


export default AddItem;
   

