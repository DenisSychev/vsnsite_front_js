import React, {PureComponent} from 'react';

export default class Post extends PureComponent {
    render() {
        const {post} = this.props;
        return (
            <div className={post._id}>
                {post.title} ({post.userid})
                {post.text}
            </div>
        );
    }
}