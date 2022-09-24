import React from 'react'
import Header from './Component/ToDoList/Header';
import List from './Component/ToDoList/List';
import Form from './Component/ToDoList/Form';

 function ToDoList() {
  return (
    <div>
        <Header/>
    <List/>
    <Form/>
    </div>
  )
}

export default ToDoList