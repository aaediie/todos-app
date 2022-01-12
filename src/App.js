import './App.css';
import TextField from '@mui/material/TextField';
import { useState , useEffect } from 'react';
import { db } from "./firebase_config";
import firebase from "firebase";
import Button from '@mui/material/Button';
import TodoListItem from "./Todo";

function App() {
  const [todos , setTodos] = useState([]);
  const [ todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []) //blank to run only for the first launch

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e){
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true , 
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo : todoInput,
    });

    setTodoInput("");
  }
  return (
    <div className="App" >
       <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
      <h1>Things to do! 💭</h1>
      <form>
      <TextField id="standard-basic" 
      label="Jot down your things to make it happen!" 
      value = {todoInput}
      onChange={(e) => setTodoInput(e.target.value)}
      variant="standard" 
      style={{ width: "90vw", maxWidth: "500px"}}
      />
      <Button type = "submit" variant="contained" onClick = {addTodo} style = {{display : "none"}}>
        Click Me</Button>
      </form>

      <div style={{ width: "90vw", maxWidth: "500px" , marginTop : "40px"  }}> 
      {todos.map((todo) => (
        <TodoListItem todo = {todo.todo} 
        inprogress = {todo.inprogress} 
        id ={todo.id}/>
      ))}
      </div>
    </div>
    </div>
  );
}

export default App;
