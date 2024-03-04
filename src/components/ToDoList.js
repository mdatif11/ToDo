import React from 'react'
import '../App.css';
import sound from '../assets/delete.mp3'
function ToDoList(props) {
    const handler=()=>
    {
        props.delList(props.item);
        const audio =new Audio(sound);
        audio.play();
    }
  return (
      <li className='list-item'>
          <i className="fa-regular fa-circle-dot" style={{color:'yellow'}}></i><span className='list'>{props.item}</span>
          <span className='icons'>
            <i className="fa-solid fa-trash-can" onClick={handler}></i>
          </span>
      </li>
  )
}
export default ToDoList