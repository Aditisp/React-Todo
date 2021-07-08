import  React  from "react";
import ReactDOM from "react-dom";
import axios from 'axios';


class AddItem extends React.Component{
    constructor(props){
        super(props);

        this.state={
            tasks:[],
            title:''
        };
    }

    componentDidMount(){
        axios.get('http://localhost:3003/tasks')
        .then(result=>{
            this.setState({
                tasks:result.data
            })
        })
    }

    titleChange=(e)=>{
        this.setState({
            title:e.target.value

        });
    }

    addRec=(e)=>{
        axios.post('http://localhost:3003/tasks',{title:this.state.title})
        .then(()=>{
            this.componentDidMount();
        })

    }

render(){

    const {tasks}=this.state;

    return (
        <>
       <div style={{ position:"relative", left:"500px", top:"5px"}}>
       <form onSubmit={(e)=> this.addRec(e)}>
       <h3>Add a Task:</h3><br/>
       <input 
        style ={{padding: "8px" , height: "50px", width:"400px"}} 
        type="text" 
        name="title"
        value= {this.state.title}
        onChange={(e)=> this.titleChange(e)}
        />
        <br/><br/>
        <button class="button3">Submit</button>
        </form>
        </div>
       </>
       
    )
}
    
}
ReactDOM.render(<AddItem/>,document.getElementById("root"));
export default AddItem;