import React, { useState } from 'react';
import { useQuery } from 'urql';
import { GET_USER_TODOS } from '../graphql/queries';

const TodoSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'complete' | 'incomplete'>('all');

  const [result] = useQuery({
    query: GET_USER_TODOS,
    variables: { userId: '1' }, 
  });

  const { data, fetching, error } = result;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredTodos = data.user.todos.data.filter((todo: any) => {
    const matchesSearchQuery = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === 'all' ||
      (filter === 'complete' && todo.completed) ||
      (filter === 'incomplete' && !todo.completed);

    return matchesSearchQuery && matchesFilter;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search todos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="complete"
            checked={filter === 'complete'}
            onChange={() => setFilter('complete')}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            value="incomplete"
            checked={filter === 'incomplete'}
            onChange={() => setFilter('incomplete')}
          />
          Incomplete
        </label>
      </div>
      <div>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo: any) => (
            <div key={todo.id} className="card">
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">Status: {todo.completed ? 'Complete' : 'Incomplete'}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No todos found.</p>
        )}
      </div>
    </div>
  );
};

export default TodoSearch;