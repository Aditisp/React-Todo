import React, { Component , useState , useEffect } from 'react';
import axios from 'axios';
import 'A:/React/app/demoapp/src/MyComponents/Home.css';

const Home = () =>{
    const [tasks,setTask] = useState([]);
       useEffect(() => {
           loadTasks();
       }, [] );

       const loadTasks = async () => {
           const result = await axios.get("http://localhost:3003/tasks");
           setTask(result.data);

       }
       return (
        <>
        {'\u00A0'} {'\u00A0'}
    
    
    {tasks.map((tasks) => (
        <div class="form-check" style={{fontSize: "50px",paddingLeft: "35px"}}>
        <input style={{height: "20px", width:"20px"}} className="form-check-input" type="checkbox" value="" id="cbox3" />
        {'\u00A0'}
        <label  style={{fontSize: "20px"}} class="form-check-label" for="cbox3">
      
       {tasks.title} 
     </label>
     
     </div>

    ))

    }
      </>
      
    );
};
export default Home;