import React from 'react';
import './TodoItem.css';
import {useDispatch} from 'react-redux';
import {setCheck} from '../features/todoSlice';


const  TodoItem = ({name, done, id}) => {
    const Checkbox = props => (
        <input type="checkbox" {...props} />
      )
      const dispatch = useDispatch()


      const handleCheck = () => {
        dispatch(setCheck(id))
    }
    
    return (
        <div className='todoItem'>
            
         <label> <Checkbox checked={done} onChange={handleCheck} /> 
            <p className={done && 'todoItem--done'}>{name}</p></label>
        </div>
    )
}

export default TodoItem;
