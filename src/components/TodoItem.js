import React from 'react';
import { useDispatch } from 'react-redux';
import { tamamlandiDegistir, todoSil } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const ckeckboxTiklandi = () => {
		dispatch(tamamlandiDegistir({ id, completed: !completed }));
	};

	const todoSilmeIslemi = ()=> {
		dispatch(todoSil({id}));
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input 
					type='checkbox' 
					className='mr-3' 
					checked={completed} 
					onClick={ckeckboxTiklandi}></input>
					{title}
				</span>
				<button onClick={todoSilmeIslemi} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
