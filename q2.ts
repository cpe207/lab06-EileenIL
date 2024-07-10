// const axios = require("axios");
import axios from "axios";


/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number): Promise<any> => {
  try {
    
    const todoRes = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = todoRes.data;
    const userId = todo.userId;
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userdata =user.data;
    return {
      owner: userdata.name,
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
