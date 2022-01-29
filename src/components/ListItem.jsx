import React from 'react';

export const dateFormatter = ( value ) =>
{
    if ( !value ) return "N/A";

    const formatter = new Intl.DateTimeFormat( 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    } );

    const date = new Date( value );
    //this is just to test

    return formatter.format( date );
};


function ListItem ( { todo, changeHandler } )
{
    const handleChange = e =>
    {
        changeHandler( todo.id, e.target.checked );
    };

    return (
        <label className="todo-item" htmlFor={ todo.id }>
            <input
                onChange={ handleChange }
                checked={ todo.complete }
                type="checkbox"
                name={ todo.id }
                id={ todo.id } />

            <p className="title">{ todo.title }</p>

            <p className="time">{ dateFormatter( todo.createdAt ) }</p>

        </label>
    );
}

export default ListItem;
