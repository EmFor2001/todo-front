"use client";

import styled from "styled-components";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export default function Home() {
  return (
    <>
      <RootContainer>
        <TitleContainer>
          <Title>Todo App</Title>
          <Subtitle>Full-stack todo</Subtitle>
        </TitleContainer>
      </RootContainer>
    </>
  );
}
