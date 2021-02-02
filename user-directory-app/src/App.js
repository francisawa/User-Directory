import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
function App() {
  const [users,setUsers] = useState([])
useEffect(()=>{
  getData()
},[])
  function getData() {
    fetch("https://randomuser.me/api/?results=5").then(res => res.json())
    .then(data => {
      console.log(data)
      setUsers(data.results)
    } )
  }
  return (
    <div className="App">
      <table> 
        <thead>
          <tr>
            <th>
              name
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cody</td>
          </tr>
          <tr>
            <td>{"Cod"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
