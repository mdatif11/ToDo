import React, { useState } from 'react'
import sound from '../assets/add.wav'
function ToDoInput(props) {
    const [inputText,setInputText]=useState('');
    const inputHandler=(e)=>
    {
        setInputText(e.target.value);
    };
    const buttonHandler=()=>
    {
        props.addList(inputText);
        setInputText('');
        const audio =new Audio(sound);
        if(inputText!='')
        audio.play();
    };
    const keyHandler=(e)=>
    {
        if(e.keyCode==13)
        buttonHandler();
    }
  return(
      <div className='input-container'>
          <input type='text' className='input-box-todo' placeholder='type your list here ....' onChange={inputHandler} value={inputText} onKeyDown={keyHandler}></input>
          <button className='add-btn' onClick={buttonHandler}><i className="fa-solid fa-plus"></i></button>
      </div>
  )
}
export default ToDoInput;