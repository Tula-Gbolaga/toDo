import React, { Component } from 'react';

export class ToDoForm extends Component
{
    state =
        {
            title: ""
        };

    changeHandler = e =>
    {
        this.setState( { title: e.target.value } );
    };

    submitHandler = e =>
    {
        e.preventDefault();
        if ( this.state.title.trim() )
        {
            this.props.addToDo( this.state.title );
            this.props.toggle( "isAdding" );

        }

    };


    render ()
    {
        return (
            <div className="overlay">
                <form className="createForm" onSubmit={ this.submitHandler }>

                    <label htmlFor="create">
                        <h3>Create to do</h3>
                    </label>
                    <input
                        id="create"
                        name="create"
                        onChange={ this.changeHandler }
                        value={ this.state.title }
                        type="text" />

                    <button type="submit">Create</button>

                    <button type="button" onClick={ () => this.props.toggle( "isAdding" ) } >Close</button>
                </form>
            </div>

        );
    }
}

export default ToDoForm;
