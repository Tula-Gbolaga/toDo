import React from 'react';
// eslint-disable-next-line
import ListItem from "./ListItem";

function ToDoList ( { todos, changeStatus } )
{
    return (
        <ul className="todo-list">
            {
                todos.length ? todos.map( t => (
                    <ListItem key={ t.id } todo={ t } changeHandler={ changeStatus } />
                ) )

                    : <li>No items found</li>
            }
        </ul>
    );
}

export default ToDoList;
