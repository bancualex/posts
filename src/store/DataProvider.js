import { PostContext, LoginContext } from './index';
import React, { useState } from 'react';
import { makeRequest } from './request';

function DataProvider({children}) {
    const postsInLocalStorage = localStorage.getItem('postsInLocalStorage');
    const [posts, setPosts] = useState(JSON.parse(postsInLocalStorage) || []);
    const [comments, setComments] = useState([]);
    const loginTokenInLocalStorage = localStorage.getItem('loginTokenInLocalStorage');
    const [loginToken, setLoginToken] = useState(loginTokenInLocalStorage === "true" || false);
    const defaultComponentMessage = "Hello from";

    const loadAllPosts = () => {
        const post_url = 'https://demo.martian.services/api/posts/';

        makeRequest(post_url)
        .then(response => response.json())
        .then(data => setPosts(data));
    }
    
    const loadCommentsForPost = (postId) => {
        const comments_url = 'https://demo.martian.services/api/posts/' + postId + '/comments';

        makeRequest(comments_url)
        .then(response => response.json())
        .then(data => setComments(data));
    }

    React.useEffect(() => {
        localStorage.setItem('loginTokenInLocalStorage', loginToken);
    }, [loginToken]);

    React.useEffect(() => {
        localStorage.setItem('postsInLocalStorage', JSON.stringify(posts));
    }, [posts]);

    return (
        <PostContext.Provider
            value={{
                posts,
                comments,
                loadAllPosts,
                loadCommentsForPost
            }}
        >
            <LoginContext.Provider value={{
                defaultComponentMessage,
                loginToken,
                setLoginToken: (value) => setLoginToken(value),
            }}>
                {children}
            </LoginContext.Provider>

        </PostContext.Provider>
    );
}

export default DataProvider;