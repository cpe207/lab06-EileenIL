// const axios = require("axios");
import axios from "axios";


/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = res.data;
    const userId = todo.userId;
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userdata =user.data;
    const result ={
      owner: userdata.name,
      title: todo.title,
      completed: todo.completed,
    };
    return result;
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
