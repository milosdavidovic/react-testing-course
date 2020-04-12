/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import UsersList from "./components/ContactsList/ContactsList";
import { getUsers, UserModel } from "./api/getUsers";

const App = () => {
  const [users, setUsers] = React.useState<UserModel[]>([]);

  async function handleFetchContacts() {
    const users = await getUsers();
    setUsers(users);
  }

  function handleClearContacts() {
    setUsers([]);
  }

  return (
    <>
      <h1>Contacts list</h1>
      <button onClick={handleFetchContacts}>🔃 Load contacts</button>
      <button onClick={handleClearContacts}>🗑️ Clear contacts</button>
      <UsersList users={users} />
    </>
  );
};

export default App;
