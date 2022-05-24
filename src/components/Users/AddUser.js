import Card from "../UI/Card";
import style from "./AddUser.module.css"

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="text"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
