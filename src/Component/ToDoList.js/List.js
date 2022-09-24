import React, { useState } from 'react'
import Form from './Form'

function List() {
    const [toDos, setToDos] = useState([]);
    const addToDo = (toDo) => {
        
        const toDosCopy = [...toDos]
        toDosCopy.push(toDo)
        setToDos(toDosCopy);
        const markAsCompleted=(name)=>{
          const idx=toDos.findIndex(todo=>todo.name==name);
          const toDosCopy=[...toDos]
        }
        

    };

    return (
        <div>
            <div>{toDos.map((todo)=>{
              return <P key={todo.name} onClick={()=>markAsCompleted}> {todo.name}</P>}) 
              className={toDo.completed ? "strike:"}
            </div>
            <Form addToDoCallback={addToDo} />
        </div>
    );
}

export default List