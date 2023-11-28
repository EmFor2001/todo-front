"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TodoTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TodoItem = styled.li`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const TodoItemTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const TodoItemDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export default function Home() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const response = await fetch("https://localhost:7085/ToDo");
    const data = await response.json();
    console.log(data);
    setTodos(data);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <RootContainer>
        <TitleContainer>
          <Title>Todo App</Title>
          <Subtitle>Full-stack todo</Subtitle>
        </TitleContainer>
        <TodoContainer>
          <TodoTitle>Todo List</TodoTitle>
          <TodoList>
            {todos.map((todo: any) => (
              <TodoItem key={todo.id}>
                <TodoItemTitle>{todo.title}</TodoItemTitle>
                <TodoItemDescription>{todo.description}</TodoItemDescription>
              </TodoItem>
            ))}
          </TodoList>
        </TodoContainer>
      </RootContainer>
    </>
  );
}
