import React, { useEffect } from 'react';
import AddItem from './components/AddItem/AddItem';
import TaskList from './components/TaskList/TaskList';
import "./App.css"
import {ThunkDispatch} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { fetchPerson } from './store/features/personSlice';



function App() {
  //dispatch thunk
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
 
    dispatch(fetchPerson()); 
  }, [dispatch]);

  return (
    <div className="App">
      <AddItem />
      <TaskList />  
    </div>
  );
}

export default App;
