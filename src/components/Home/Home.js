import React, { useState } from 'react';
import './Home.css';
import { usePostState, useLoginState } from '../../store/index';
import DetailedPost from '../DetailedPost/DetailedPost';

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const postState = usePostState();
  const loginState = useLoginState();
  const handlePostClick = (event, id) => {
    window.open("/post/"+id, "_blank");
  };

  const { defaultComponentMessage } = loginState;

  React.useEffect(() => {
    console.log(defaultComponentMessage, " App/Home component");

    postState.loadAllPosts();
  }, []);

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  console.log('postState', postState.posts);
  const filteredPosts = postState.posts.filter((post) => post.userId.toString().includes(searchString));

  return (
    <div className="Home" data-testid="Home">
      <label>Filter by user: </label>
      <input className="SearchPost" type="text" value={searchString} onChange={handleChange} />
      {filteredPosts.map((post) => {
        return (<DetailedPost key={post.id} post={post} onPostClick={handlePostClick}/>)
      })}
    </div>
  );
};



export default Home;
