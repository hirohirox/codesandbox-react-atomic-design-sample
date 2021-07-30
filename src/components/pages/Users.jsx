import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
// import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけぇ${val}`,
    image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb",
    email: "123456@example.com",
    phone: "000-000-0000",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});
export const Users = () => {
  // const { state } = useLocation();
  // const isAdmin = state ? state.isAdmin : false;

  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切替</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
