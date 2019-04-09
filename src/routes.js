import PostsList from 'containers/PostListContainer';
import Post from 'containers/PostContainer';
import Home from 'components/Home';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/posts',
        exact: true,
        component: PostsList
    },
    {
        path: '/posts/:_id',
        exact: true,
        component: Post
    }
]