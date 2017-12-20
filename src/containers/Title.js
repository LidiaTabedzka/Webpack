import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    render() {
        return (
            <div className={style.appTitle}>
                <h1>TO DO LIST</h1>
                <p>number of things currently to be done: <span className={style.bold}>{this.props.listLength}</span></p>
            </div>
        );
    }
}

export default Title;