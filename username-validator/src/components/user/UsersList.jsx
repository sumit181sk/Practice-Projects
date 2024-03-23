import Card from "../ui/Card";
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <>
    <Card className={classes.style}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> is <strong>{user.age}</strong> years old
          </li>
        ))}
      </ul>
    </Card>
    </>
  );
};

export default UsersList;
