import React from 'react';
import { useSelector } from 'react-redux';

import { SectionSummary, Styledh2 } from '../styledComponents/styled_components';

// Responsible for keeping track of num of todos and done todos.
export const TodoSummary = () => {
  // Get list info from the store, for this list
  const list = useSelector((store) => store.todos.list);

  // Count the number of items that are done using filter. 
  const numDone = list.items.filter(item => item.done).length;

  return (
    <SectionSummary className='todo-summary'>
      <Styledh2 tabIndex='0'>
        {numDone}/{list.items.length} done
      </Styledh2>
    </SectionSummary>
  );
};
