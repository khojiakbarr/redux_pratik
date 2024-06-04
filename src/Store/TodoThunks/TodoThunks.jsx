import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const RESOURCE = "todo";
const URL = `https://crudcrud.com/api/9c6e2c5a93df4684bd4c786d449d14db/${RESOURCE}/`;

const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await axios(URL);
  return response.data;
});

const postTodos = createAsyncThunk(
  "todos/postTodo", //Action type
  async (data, thunkApi) => {
    try {
      const response = await axios.post(URL, data);
      thunkApi.dispatch(getTodos());
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(URL + id);
      thunkApi.dispatch(getTodos());
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

const updateTodo = createAsyncThunk(
  "todo/updateTodo", // Action type
  async (data, thunkApi) => {
    try {
      const response = await axios.put(`${URL + data.id}/`, {
        task: data.newTask,
      });
      thunkApi.dispatch(getTodos());
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export { getTodos, postTodos, deleteTodo, updateTodo };
