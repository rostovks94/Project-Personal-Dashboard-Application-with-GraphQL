import React, { useState } from 'react';
import { useQuery } from 'urql';
import { GET_USER_TODOS } from '../graphql/queries';

const TodoItem = () => {
  const [filter, setFilter] = useState<'all' | 'complete' | 'incomplete'>('all');
  
  const [result] = useQuery({
    query: GET_USER_TODOS,
    variables: { userId: '1' }, 
  });

  const { data, fetching, error } = result;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredTodos = data.user.todos.data.filter((todo: any) => {
    if (filter === 'complete') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; // 'all'
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('complete')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      {filteredTodos.map((todo: any) => (
        <div key={todo.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">Status: {todo.completed ? 'Complete' : 'Incomplete'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;