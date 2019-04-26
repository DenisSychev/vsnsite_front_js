import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './post.sass';

export default class Post extends PureComponent {
    render() {
        const { post } = this.props;
        return (
            <article className="article">
                <div className="titleImage" style={{ backgroundImage: `url(${post.substrate.img})` }}>
                    <h2 className="container titleText">{post.title}</h2>
                </div>
                <div className="container">
                    <div className="small">Текст <Link to={`/posts/${post._id}`}>{post.userid}</Link> от 25.03.2019</div>
                    <div className="text">{post.text}</div>
                    <p className="small">Что бы комментировать прочитанное нужно <button class="whiteButton">Авторизоваться</button></p>
                </div>
            </article>
        );
    }
}