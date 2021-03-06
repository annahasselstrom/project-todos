import React from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';

import { CustomCheckbox } from './CustomCheckbox';
import { DeleteContainer, DeleteButton } from '../styledComponents/styled_components';
import  bin  from '../assets/bin.png';

// Responsible for rendering the custom checkbox and delete button.
// Responsible for dispatching a remove todo-action.
// Responsible for rendering a todo as done or not done.
// Responsible for dispatching a setDone action.
// The property item is passed from the parent: the TodoList. Gives TodoItem access to 
// the item in the Redux store via the map() done in the TodoList.
export const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  // Create the onRemoveClicked handler and dispatch action.
  const onRemoveClicked = () => {
    dispatch(
      todos.actions.removeTodo({
        itemId: item.id
      })
    );
  };

  // Create the onChange handler for handling the done status. Dispatch the action
  // called setDone and sends with it two pieces of info: the id of the item
  // and the value of onChangeValue. Done or not. This new value is listened to
  // by the setDone reducer in todos, and sets the new value in the global/local state.
  const handleOnChange = () => {
    dispatch(
      todos.actions.setDone({
        itemId: item.id,
        done: !item.done
      })
    );
  };

  return (
    <DeleteContainer className={`todo-item ${item.done ? 'done' : ''}`}>
      <CustomCheckbox 
        tabIndex='0' 
        isChecked={item.done}
        onChangeHandler={handleOnChange}>
      </CustomCheckbox> 
      <span className='todo-item-text'>{item.description}</span>
      <DeleteButton 
        className='todo-item-remove' 
        type='button'
        onClick={onRemoveClicked}>
        <img src={bin} alt='bin' />
      </DeleteButton>
    </DeleteContainer>
  )
};
