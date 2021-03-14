import React, { Component } from 'react';
import ToDoList from "./ToDoList";


export class Filters extends Component 
{
    state =
        {
            isDesc: true,
            status: true,
            applyFilter: false

        };

    filter = todos =>
    {
        let filteredToDos = [ ...todos ];

        filteredToDos = filteredToDos.filter( todo => todo.complete === this.state.status );


        if ( this.state.isDesc )
        {
            filteredToDos = filteredToDos.sort( ( a, b ) => b.createdAt - a.createdAt );
        }
        else
        {
            filteredToDos = filteredToDos.sort( ( a, b ) => a.createdAt - b.createdAt );
        }

        return filteredToDos;


    };

    changeFilter = ( filterName, filterVal ) =>
    {
        this.setState( { [ filterName ]: filterVal } );
    };



    render ()
    {
        const { status, isDesc, applyFilter } = this.state;

        const todos = applyFilter ? this.filter( this.props.todos ) : this.props.todos;

        return (
            <div>
                <section className="filters">
                    <label htmlFor="status">
                        <input
                            onChange={ () => this.changeFilter( "status", !status ) }
                            checked={ status }
                            type="checkbox"
                            name="status"
                            id="status" />
                        <p>Status</p>
                    </label>
                    <label htmlFor="sortBy">
                        <input
                            onChange={ () => this.changeFilter( "isDesc", !isDesc ) }
                            checked={ isDesc }
                            type="checkbox"
                            name="sortBy" id="sortBy" />
                        <p>Latest</p>
                    </label>
                    <button
                        onClick={ () => this.changeFilter( "applyFilter", true ) } >
                        Apply Filter
                    </button>
                </section>
                <ToDoList todos={ todos } changeStatus={ this.props.changeStatus } />
            </div>
        );


    }

}

export default Filters;
