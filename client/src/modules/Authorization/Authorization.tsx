import axios from "axios";
import React, { MouseEvent, FC, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Authentication } from "../../utils/Authentication";

type AuthorizationProps = {
  isSignIn: boolean;
};

export const Authorization: FC<AuthorizationProps> = ({ isSignIn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [reapetedPassword, setReapetedPassword] = useState<string>("");

  const history = useHistory();
  const route = useLocation();

  const token = localStorage.getItem("token");
  useEffect(() => {
    token && history.push("/chat");
  }, []);

  const currentPage = isSignIn ? "Sign in" : "Sign up";
  const anotherPage = !isSignIn ? "Sign in" : "Sign up";

  const togglePage = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    route.pathname === "/" ? history.push("/sign-up") : history.push("/");
  };

  const auth = new Authentication();

  const confirm = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const method = isSignIn ? "login" : "registration";
    const response = await auth[method](email, password);

    response && history.push("/chat");
  };

  return (
    <div className="auth">
      <h1>{currentPage}</h1>
      <form className="auth__form">
        <div className="auth__form__item">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="auth__form__item">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {currentPage === "Sign up" && (
          <div className="auth__form__item">
            <label htmlFor="">Repeat password</label>
            <input
              type="password"
              value={reapetedPassword}
              onChange={(event) => setReapetedPassword(event.target.value)}
            />
          </div>
        )}
        <div className="">
          <button type="submit" onClick={confirm}>
            {currentPage}
          </button>
          <button onClick={togglePage}>{anotherPage}</button>
        </div>
      </form>
    </div>
  );
};
