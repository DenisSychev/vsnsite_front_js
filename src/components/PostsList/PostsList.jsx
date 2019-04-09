import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './post.sass';

export default class PostsList extends PureComponent {
    render() {
        const { posts, onLoadMore } = this.props;
        return (
            <Fragment>
                {posts.map(post =>
                    <div className="post container" key={post._id}>                        
                        <h1><Link to={`/posts/${post._id}`}>{post.title}</Link></h1>
                        <p className="author">Автор {post.userid}</p>
                        <p>Картинка по адресу {post.substrate.img}</p>
                        <p>Описание картинки {post.substrate.alt}</p>
                        <p>{post.text}</p>
                    </div>)}
                <button className="white_button" onClick={onLoadMore}>Загрузить ещё статьи</button>
            </Fragment>
        );
    }
};