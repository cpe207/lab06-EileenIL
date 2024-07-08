// const axios = require("axios");
import axios from "axios";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface User {
  id: number;
  name: string;
  }

/* assign interface/type to the function definition properly */
const getUser = async (userId: number): Promise<string> => {
  try {
    const res = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = res.data;
    return user.name;
  } catch (err) {
    return "INVALID USER ID";
  }
};
const getTodo = async (todoId: number): Promise<any> => {
  try {
    const res = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = res.data;
    const ownerName = await getUser(todo.userId);
    return {
      owner: ownerName,
      title: todo.title,
      completed: todo.completed,
    };
  } catch (err) {
    return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
