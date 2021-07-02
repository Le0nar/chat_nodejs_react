import React, { MouseEvent, useState } from "react";
import { FC } from "react";
import { useHistory } from "react-router-dom";

export const Authorization: FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const history = useHistory();

  const currentPage = isSignIn ? "Sign in" : "Sign up";
  const anotherPage = !isSignIn ? "Sign in" : "Sign up";

  const togglePage = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsSignIn(!isSignIn);
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
