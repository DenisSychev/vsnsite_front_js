import React from 'react';
import './Home.sass';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home-block container">
                    <div className="home-text">
                        <h3>Очень простой новостной сайт</h3>
                        <h4>тренировочный вариант</h4>
                    </div>
                </div>
            </div>
        );
    }
};