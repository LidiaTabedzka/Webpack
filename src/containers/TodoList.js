import React from 'react';
import Todo from './Todo.js';
import style from './TodoList.css';

class TodoList extends React.Component {
    render() {
        return (
            <div className={style.TodoList}>
                <ul>
                    {this.props.data.map(singleData => <Todo key={singleData.id} singleData={singleData} removeItem={this.props.removeItem}/>)}
                </ul>
            </div>
        );
    }
}

export default TodoList;