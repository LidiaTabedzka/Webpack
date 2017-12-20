import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
    render() {
        return (
            <div className={style.TodoList}>
                <ul>
                    {this.props.data.map(singleData =>
                    <li key={singleData.id}>
                        <p>{singleData.text}</p>
                        <button onClick={() => this.props.removeItem(singleData.id)}>X</button>
                    </li>)}
                </ul>
            </div>
        );
    }
}

export default TodoList;