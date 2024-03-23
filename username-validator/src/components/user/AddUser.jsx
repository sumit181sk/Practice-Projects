import Button from "../ui/Button";
import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";
import classes from "./AddUser.module.css";
import { useState } from "react";

export const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState('');
  const[error, setError] = useState(null);

  const handleUsernameChange = (event) => {
    setEnteredUsername(event.target.value);
  };
  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };
  const closeModalHandler = () => {
    setError(null);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({title: "An Error Has Occurred", message: "Enter Valid Username"});
      return;
    }
    if(+enteredAge < 1){
      setError({title: "An Error Has Occurred", message: "Enter Valid AGE"});
      return;
    }
    
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onClose={closeModalHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={handleUsernameChange}
          value={enteredUsername}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="username"
          onChange={handleAgeChange}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
