import axios from "axios";

export interface UserModel {
  id: string;
  name: string;
  phone: string;
  email: string;
}

const getUsers = async () => {
  const response = await axios.get<Array<UserModel>>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data || [];
};

export default getUsers;
