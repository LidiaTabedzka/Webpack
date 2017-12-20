import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: '',
            error: ''
        };
    }
    onChange(event) {
        this.setState({newItem: event.target.value});
    }
    handleKeyUp(event) {
        if (event.keyCode === 13) {
            this.onSubmit;
        }
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.state.newItem) {
            this.props.addNewItem(this.state.newItem);
            this.setState({newItem: '', error: ''});
        } else this.setState({error: 'please enter the activity name'});
    }
    render() {
        return (
            <div className={style.TodoForm}>
                <form onSubmit={event => this.onSubmit(event)}>
                    <input
                    ref={input => input && input.focus()}
                    type="text"
                    placeholder="Add new activity to the list"
                    onChange={event => this.onChange(event)}
                    onKeyUp={event => this.handleKeyUp(event)}
                    value={this.state.newItem}/>
                    <button type="submit"><i class="fa fa-check" aria-hidden="true"></i></button>
                </form>
                {
                    this.state.error ? <p>{this.state.error}</p> : null
                }
            </div>
        );
    }
}

export default TodoForm;