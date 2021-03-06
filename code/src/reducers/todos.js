import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    name: 'List',
    items: []
  }
};

// 'createSlice' "communicates" with redux when setting up store"
// The name of reducer: addTodo will match the action.
export const todos = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const itemInfo = action.payload;
      state.list.items.push(itemInfo); // Use existing state. Get the list (from above)
      // from the existing state. Look at the items array in the list. Push new item to array/list.
      // 'itemInfo' is what is inside the action.payload - the payload needs the same structure: 'text' property and 'done'
      // property. The value from TodoInput.js
    },

    // The payload contains the info on which was checked as done. Using the id of that
    // item. Find() - finds todo and set state done or not done.
    setDone: (state, action) => {
      const { itemId, done } = action.payload;
      const item = state.list.items.find((item) => item.id === itemId);
      item.done = done;
      
    },
    // Filter away the one we want to delete. Since we know the id of the one we do not want to keep, we can keep everything else.
    // The payload contains the id of the one we want do remove. The onClick.
    removeTodo: (state, action) => { 
      const { itemId } = action.payload;
      state.list.items = state.list.items.filter(
        (item) => item.id !== itemId
      );

    },
    clearAll: () => {
      return initialState // Does not need a state or action(payload)
    }
  }
});
