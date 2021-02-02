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
  function sortData(){
const newData = [...users] 
newData.sort((a,b) =>a.dob.age-b.dob.age)
setUsers(newData)
  }
  function filterData(event){
const newData = users.filter((user) => user.dob.age === event.target.value)
setUsers(newData)
  }
  return (
    <div className="App">
      <input type = "text" onChange = {filterData}/> 
      <button onClick = {sortData} >sort by age</button>
      <table> 
        <thead>
          <tr>
            <th>
              name
            </th>
            <th>
              age
            </th>
            <th>
             cell
            </th>
            <th>
             email
            </th>
            <th>
             gender
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <div> 
             <tr>
            <td>{user.name.first} {user.name.last}</td>
       
            <td>{user.dob.age}</td>
          
            <td>{user.cell}</td>
          
            <td>{user.email}</td>
          
            <td>{user.gender}</td>
          </tr>
          </div>
          ) ) }
         
        </tbody>
      </table>
    </div>
  );
}

export default App;
