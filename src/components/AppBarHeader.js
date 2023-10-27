import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
function AppBarHeader() {
  const round = useSelector((state) => state.roundData.roundData);
  const player = useSelector((state) => state.playerData.playerData);

  return (
    <HeaderContainer>
      <CourseName variant="h4">{round.courseName}</CourseName>
      <UserContainer>
        <UserName variant="h4">{player.players[0].name}</UserName>
      </UserContainer>
    </HeaderContainer>
  );
}

export default AppBarHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  background-color: #272727;
  color: white;
`;

const CourseName = styled(Typography)`
  padding-left: 20px;
`;

const UserName = styled(Typography)`
  padding-right: 20px;
`;

const UserContainer = styled.div`
  display: flex;
  gap: 20px;
`;
