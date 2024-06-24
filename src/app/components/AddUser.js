"use client"
import React, { useState } from 'react'
import { addUser } from '../../redux/session';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AddUser = () => {

const [getItems,setItems]=useState('');
const dispatch = useDispatch();

console.log('sad',getItems)

const user=()=>{
    dispatch(addUser(getItems))
}
const select = useSelector((data)=>data)
console.log(select)

  return (
    <div>
      <input type='text' onChange={(e)=>setItems(e.target.value)}/>
<button onClick={user}>add </button>
    </div>
  )
}

export default AddUser
