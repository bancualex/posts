import React from 'react';
import './Header.css';
import { useLoginState } from '../../store/index';

const Header = () => {
  const loginState = useLoginState();
  const { setLoginToken, loginToken } = loginState;

  return (
    <div className="Header" data-testid="Header">
      {loginToken &&  <button className="LogOutButton" onClick={() => setLoginToken(false)}>Log out</button>}
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
