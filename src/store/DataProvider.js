import { PostContext, LoginContext } from './index';
import React, { useState } from 'react';
import { posts as defaultPosts } from '../mock/defaultPosts';

function DataProvider({children}) {
    const [posts, ] = useState(defaultPosts);
    const loginTokenInLocalStorage = localStorage.getItem('loginTokenInLocalStorage');
    const [loginToken, setLoginToken] = useState(loginTokenInLocalStorage === "true" || false);
    const defaultComponentMessage = "Hello from";

    React.useEffect(() => {
        localStorage.setItem('loginTokenInLocalStorage', loginToken);
    }, [loginToken]);

    React.useEffect(() => {
        localStorage.setItem('postsInLocalStorage', posts);
    }, [posts]);

    return (
        <PostContext.Provider
            value={{
                posts,
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