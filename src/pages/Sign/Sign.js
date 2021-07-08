import React, { useState } from "react";
import "./Sign.css";
import { Link, useLocation } from "react-router-dom";
import firebase from "../config/FbConfig";

function Sign() {
  let userEmpty = {
    email: "",
    password: "",
  };
  const [userState, setUserState] = useState(userEmpty);
  let changeHandler = (e) => {
    let userData = { ...userState };
    userData[e.target.name] = e.target.value;
    setUserState(userData);
  };
  let signInHandler = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(userState.email, userState.password)
      .then((r) => {
        console.log(r);
      });
  };
  return (
    <div className="conteiner7">
      <h2 className="sign__title">Авторизация</h2>
      <form action="" method="GET" className="sign__form">
        <input
          name="email"
          type="text"
          placeholder="Ваша почта..."
          className="sign__input-email"
          onChange={changeHandler}
        />
        <input
          name="password"
          onChange={changeHandler}
          type="text"
          placeholder="Ваш пароль ..."
          className="sign__input-name"
          type="password"
        />
        <div className="sign__buttons">
          <Link
            to="/"
            onClick={signInHandler}
            className="btn btn-primary sign__btn"
          >
            Далее
          </Link>
          <Link className="btn btn-primary" to="/signup">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Sign;
