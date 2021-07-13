import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import { IMessage, IUser } from "../../interfaces/chat-interface";
import styled from "styled-components";

const FAKE_FRINEDS_LIST = [
  { name: "John", id: 1 },
  { name: "Mary", id: 2 },
  { name: "Harry", id: 3 },
];

const FAKE_MESSAGE_LIST = [
  { name: "John", id: 1, message: "hi", time: "13:55" },
  { name: "Anton", id: 2, message: "hi", time: "13:55" },
  { name: "John", id: 3, message: "hi", time: "13:55" },
  { name: "Anton", id: 4, message: "hi", time: "13:55" },
];

const Container = styled("div")`
  margin: 16px auto;
  width: 70%;
`;

const Wrapper = styled("div")`
  border: 2px solid grey;
  display: flex;
  justify-content: space-between;
`;

const FriendsListBox = styled("div")`
  width: 25%;
  padding-left: 16px;
  border-right: 2px solid grey;
`;

const RightSideBox = styled("div")`
  width: 75%;
  padding: 0px 16px;
`;

const DisplayChatBox = styled("div")`
  border-top: 2px solid grey;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;

export const Chat: FC = () => {
  const [friendsList, setFrinedsList] = useState<IUser[]>([]);
  const [messageList, setMessageList] = useState<IMessage[]>([]);

  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    setFrinedsList(FAKE_FRINEDS_LIST);
  }, []);

  useEffect(() => {
    setMessageList(FAKE_MESSAGE_LIST);
  }, []);

  return (
    <Container>
      <header>
        <button onClick={logOut}>Log out</button>
      </header>
      <Wrapper>
        <FriendsListBox>
          {friendsList.map((element) => (
            <p key={element.id}>{element.name} </p>
          ))}
        </FriendsListBox>
        <RightSideBox>
          <div>
            {messageList.map((elelement) => (
              <DisplayChatBox key={elelement.id}>
                <p>{elelement.name}</p>
                <p>{elelement.message}</p>
                <p>{elelement.time}</p>
              </DisplayChatBox>
            ))}
          </div>
          <div>
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
          </div>
        </RightSideBox>
      </Wrapper>
    </Container>
  );
};
