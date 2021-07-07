import { FC } from "react";
import { useHistory } from "react-router-dom";

export const Chat: FC = () => {
  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    history.push("/")
  };

  return <button onClick={logOut}>Log out</button>;
};
