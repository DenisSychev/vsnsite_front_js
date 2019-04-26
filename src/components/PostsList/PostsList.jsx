import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './postList.sass';

export default class PostsList extends PureComponent {
    render() {
        const { posts, onLoadMore } = this.props;
        return (
            <Fragment>
                <div className="items">
                    {posts.map(post =>
                        <section>
                            <Link to={`/posts/${post._id}`} className="post container" key={post._id} style={{ backgroundImage: `url(${post.substrate.img})` }}>
                                <h1>{post.title}</h1>
                                <p className="author">Автор {post.userid}</p>
                            </Link>
                        </section>
                    )}
                </div>
                <button className="white_button" onClick={onLoadMore}>Загрузить ещё статьи</button>
            </Fragment>
        );
    }
};