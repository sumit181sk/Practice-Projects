import AddUser from "./components/user/AddUser"
import UsersList from "./components/user/UsersList"
import { useState } from "react"

function App() {
   const [users, setUsers] = useState([]);
   const handleAddUser = (uName, uAge) => {
      setUsers((prevUsers) => {
        return [...prevUsers, {name: uName, age: uAge, id: Math.random().toString()}];
      });
   };
   

  return (
    <>
       <AddUser onAddUser={handleAddUser}/>
       <UsersList users={users}/>
    </>
  )
}

export default App
