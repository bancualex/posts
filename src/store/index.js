import React from 'react';

const LoginContext = React.createContext();
const PostContext = React.createContext();

function useLoginState() {
    const context = React.useContext(LoginContext)
    if (context === undefined) {
      throw new Error('useLoginState must be used within a DataProvider')
    }
    return context
}

function usePostState() {
    const context = React.useContext(PostContext)
    if (context === undefined) {
      throw new Error('usePostState must be used within a DataProvider')
    }
    return context
}

export { LoginContext, PostContext, useLoginState, usePostState };