import React from "react";
import './Login.css';
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch(error => alert(error.message))
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Logo" />
        <div className="login__text">
          <h1>Войти в приложение</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Войти через Google
        </Button>
      </div>
    </div>
  )
}

export default Login
