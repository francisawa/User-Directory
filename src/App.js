import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
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
      <table  className ="table"> 
        <thead>
          <tr>
            <th scope="col">
            Name
            </th>
            <th scope="col">
            Age
            </th>
            <th scope="col">
            Phone
            </th>
            <th scope="col">
             Email
            </th>
            <th scope="col">
             Gender
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <div> 
             <tr><th scope="row">{i+1}</th>
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
