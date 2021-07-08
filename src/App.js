import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import  Home  from "./MyComponents/Home";
import AddItem from './MyComponents/AddItem';
import DeleteItem from './MyComponents/DeleteItem';
import NotFound from './MyComponents/NotFound';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Switch>
      <Route exact path= "/Home" component={Home}/>
      <Route exact path= "/AddItem" component={AddItem}/>
      <Route exact path= "/DeleteItem" component={DeleteItem}/>
      <Route component={NotFound} />
    </Switch>
    </Router>
    
    

    </>
  );
}

export default App;
