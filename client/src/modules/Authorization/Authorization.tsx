import React, { MouseEvent, FC } from "react";
import { useHistory, useLocation } from "react-router-dom";

type AuthorizationProps = {
  isSignIn: boolean;
};

export const Authorization: FC<AuthorizationProps> = ({ isSignIn }) => {
  const history = useHistory();
  const route = useLocation();

  const currentPage = isSignIn ? "Sign in" : "Sign up";
  const anotherPage = !isSignIn ? "Sign in" : "Sign up";

  const togglePage = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    route.pathname === "/" ? history.push("/sign-up") : history.push("/");
  };

  const confirm = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // TODO: add check
    history.push("/chat");
  };

  return (
    <div className="auth">
      <h1>{currentPage}</h1>
      <form className="auth__form">
        <div className="auth__form__item">
          <label htmlFor="">input name</label>
          <input type="email" />
        </div>
        <div className="auth__form__item">
          <label htmlFor="">input name</label>
          <input type="password" />
        </div>
        {currentPage === "Sign up" && (
          <div className="auth__form__item">
            <label htmlFor="">input name</label>
            <input type="password" />
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
