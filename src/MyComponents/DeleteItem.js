import React, { Component, useState , useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink} from 'react-router-dom';
import 'A:/React/app/demoapp/src/MyComponents/DeleteItem.css';

const DeleteItem =() =>{
    const [tasks,setTask] = useState([]);
       useEffect(() => {
           loadTasks();
       }, [] );

       const loadTasks = async () => {
           const result = await axios.get("http://localhost:3003/tasks");
           setTask(result.data);

       };

       const deletetask = async id =>{
           await axios.delete(`http://localhost:3003/tasks/${id}`);
           loadTasks();
       };

       return (
        <>
        {'\u00A0'} {'\u00A0'}
    
    
   
        <div>

        <table id="customers">
        <tr>
        <th>Task</th>
        <th>Action</th>

        </tr>
        {tasks.map((tasks) => (
        <tr>
        <td> {tasks.title} </td>
        <td><button class="button3" onClick={() => deletetask(tasks.id)}>Delete</button></td>

       </tr>))}

       </table>
     </div>

        

    
      </>
      
    );
};
export default DeleteItem;



