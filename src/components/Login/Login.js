import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import { useLoginState } from '../../store/index';
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const loginState = useLoginState();
  const history = useHistory();
  const { loginToken, setLoginToken, defaultComponentMessage } = loginState;

  React.useEffect(() => {
    console.log(defaultComponentMessage, " Login component");
  }, []);

  const checkUser = (username, password) => {
    if(username === "user" && password === "pass") {
      setLoginToken(true);
      history.push("/app");
    }
  }

  if (loginToken) return <Redirect to={{pathname: "/app"}}/>

  return (
    <div className="Login" data-testid="Login">
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button className="Submit" type="submit" onClick={(e) => {
            e.preventDefault();

            checkUser(username, password);

          }}>Submit</button>
        </div>
      </form>
      <div className="Hint">
        Hint: user - pass
      </div>
    </div>
  )
}


Login.displayName = 'Login Component'

Login.defaultProps = {};

export default Login;
