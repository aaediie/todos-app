import { Button, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { db } from './firebase_config'

export default function TodoListItem({ todo , inprogress , id}) {

    function toggleInProgress(){
            db.collection("todos").doc(id).update({
                inprogress: !inprogress
            })
    }
function deleteTodo(){
    db.collection("todos").doc(id).delete();
}

    return (
        <div style={{display : "flex"}}>
            <ListItem>
                <ListItemText primary={todo} secondary={inprogress ? "Ongoing 🎈" : "Completed ✔"}/>
            </ListItem>

            <Button onClick = {toggleInProgress}>
            {inprogress ? "DONE" : "UNDONE"}
            </Button>
            <Button onClick={deleteTodo}>❌</Button>
        </div>
    )
}
