// import Card from "../UI/Card";
// import style from "./UsersList.module.css";

// const UsersList = (props) => {
//   return (
//     <Card classname={style.users}>
//       <ul>
//         {props.users.map((user) => (
//           <li>
//             {user.name} ({user.age} years old)
//           </li>
//         ))}
//       </ul>
//     </Card>
//   );
// };

// export default UsersList;

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;