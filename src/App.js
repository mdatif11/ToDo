import React from 'react'
import ToDoInput from './components/ToDoInput.js'
import ToDoList from './components/ToDoList.js';
import { useState,useEffect } from 'react';
import "./App.css"
function App() {
  const setItem=()=>
  {
    const item=localStorage.getItem('items');
    if(item)
    return JSON.parse(item);
    else return [];
  }
  const [list,setList]=useState(setItem());
  const addList=(inputText)=>{
    if(inputText!='')
    setList([...list,inputText]);
  }
  const delList=(val)=>
  {
    setList(list.filter((v)=>{
      return v!=val;
    }));
  }
  useEffect(() => {
    localStorage.setItem('items',JSON.stringify(list));
  }, [list])
  
  return (
    <div className='main-container'>
      <div className="center-container">
        <ToDoInput addList={addList}></ToDoInput>
        <h1 className='app-heading'>Your TO-DO List</h1>
        {list.map((val,ind)=>{
          return <ToDoList key={ind} item={val} delList={delList}></ToDoList>
        })}
      </div>
    </div>
  )
}
export default App