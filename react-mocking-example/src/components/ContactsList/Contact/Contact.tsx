import React from "react";
import { UserModel } from "../../../api/getUsers";

interface Props {
  user: UserModel;
}

const UserStyle = {
  container: {
    width: "250px",
    borderBottom: "1px solid lightgrey",
    padding: "8px"
  }
};

const User: React.FC<Props> = ({ user }) => {
  return (
    <div style={UserStyle.container}>
      <strong>{user.name}</strong>
      <div>{`☎️ ${user.phone}`}</div>
      <div>{`✉️ ${user.email}`}</div>
    </div>
  );
};

export default User;
