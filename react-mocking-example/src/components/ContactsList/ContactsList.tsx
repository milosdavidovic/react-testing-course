import React from "react";
import { UserModel } from "../../api/getUsers";
import User from "./Contact/Contact";

interface Props {
  users: UserModel[];
}

const UserListStyle = {
  container: {
    marginTop: "24px"
  }
};

const UsersList: React.FC<Props> = ({ users }) => {
  return (
    <div style={UserListStyle.container}>
      {users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
};

export default UsersList;
