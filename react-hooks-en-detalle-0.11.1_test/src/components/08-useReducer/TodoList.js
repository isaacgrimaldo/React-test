import React from 'react'
import Proptypes from 'prop-types';

import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
        {
            todos.map( (todo, i) => (
                <TodoListItem 
                    key={ todo.id }
                    todo={ todo }
                    index={ i }
                    handleDelete={ handleDelete }
                    handleToggle={ handleToggle }
                />
            ))
        }
    </ul>
    )
}

TodoList.propTypes = {
    todos: Proptypes.array.isRequired,
    handleDelete: Proptypes.func.isRequired,
    handleToggle: Proptypes.func.isRequired,
}