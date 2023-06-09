import { useState, useEffect } from 'react';
import React from 'react';

/* 
	SIMPLE TODO APP THAT USES LOCAL STORAGE TO PERSIST USERS TASKS
*/

interface Tasks {
	id: number;
	name: string;
}

function Todos() {
	const [todo, setTodo] = useState('');
	const [allTodos, setAllTodos] = React.useState<Tasks[]>([]);

	const handleTodoValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTodo(e.target.value);
	};

	const handleAddTodo = (): void => {
		setAllTodos([...allTodos, { id: allTodos.length + 1, name: todo }]);
	};

	const handleTodoRemove = (id: number) => {
		const filteredTodo = allTodos.filter((todo) => todo.id !== id);
		localStorage.setItem('todos', JSON.stringify(filteredTodo));
		setAllTodos(filteredTodo);
	};

	useEffect(() => {
		if (allTodos.length === 0) {
			return;
		} else {
			localStorage.setItem('todos', JSON.stringify(allTodos));
		}
	}, [allTodos]);

	useEffect(() => {
		const localTodos = localStorage.getItem('todos');
		if (localTodos === null) {
			return;
		} else {
			setAllTodos(JSON.parse(localTodos));
		}
	}, []);

	return (
		<div className='todo-container'>
			<div>
				<input
					type='text'
					value={todo}
					name=''
					id=''
					placeholder='Add your todo..'
					onChange={handleTodoValue}
				/>
				<button onClick={handleAddTodo}>Add</button>
			</div>
			<div className='todo-grid-parent'>
				<div>
					<h4>Your Todos</h4>
				</div>
				<div className='todo-grid'>
					{allTodos.map((todo) => (
						<div key={todo.id} className='todo-item'>
							<p>{todo.name}</p>
							<button onClick={() => handleTodoRemove(todo.id)}>Remove</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export { Todos };
