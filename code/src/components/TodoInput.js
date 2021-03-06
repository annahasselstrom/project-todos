import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Generates random id to each input
import { v4 as uuidv4 } from 'uuid';

import { todos } from '../reducers/todos';
import { Form, StyledLabel, InputField, InputAdd } from '../styledComponents/styled_components';

// Responsible for dispatching the value of the input field as new todo to the Redux store.
// First store the state of inputValue locally, then dispatch inputValue to Redux store.
// Responsible for setting initial done-state of todo-input to false.

export const TodoInput = () => {
  const dispatch = useDispatch();
  
  // State for input from text-box
  const [inputValue, setInputValue] = useState('');
  // State for date
  const date = new Date();

  // Create handle submit function to dispatch addTodo
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue)

    // This is where we will dispatch the action to save the new todo item
    // The 'actions' are the names of the reducers we have defined. First 'actions'
    // and then name of reducer.
    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        id: uuidv4(),
        done: false
      })
    );

    // Clear text field after saved and component re-renders
    setInputValue('');
  };

  return (
    <>
      <StyledLabel htmlFor='todo-input'>
        date: {date.toLocaleDateString()}      
      </StyledLabel>
      <Form className='todo-input' onSubmit={handleOnSubmit}>
        <InputField
          type='text'
          aria-label='{labelText}'
          aria-required='true'
          placeholder='My next todo'
          maxLength='20'
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
          className='todo-input-text'>
        </InputField>  
        <InputAdd 
          type='submit'
          aria-label='labelAddButton'
          className='todo-input-button'
          value='+'>
        </InputAdd>
      </Form>
    </>
  );
};