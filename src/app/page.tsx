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

const TodoItemEditButton = styled.button`
  background-color: blue;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 0;

  &:hover {
    background-color: lightblue;
  }
`;

const TodoItemDeleteButton = styled.button`
  background-color: red;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 0;

  &:hover {
    background-color: lightcoral;
  }
`;

export default function Home() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const response = await fetch("https://localhost:7085/ToDo", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    setTodos(data);
  }

  async function deleteTodo(id: string) {
    const response = await fetch(`https://localhost:7085/ToDo/${id}`, {
      method: "DELETE",
    });
    console.log(response);
    getTodos();
  }

  // async function updateTodo(id: string) {
  //   const response = await fetch(`https://localhost:7085/ToDo/${id}`, {
  //     method: "PUT",
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // }

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
              <TodoItem key={todo.guid}>
                <TodoItemTitle>{todo.title}</TodoItemTitle>
                <TodoItemDescription>{todo.description}</TodoItemDescription>
                <TodoItemEditButton>Edit</TodoItemEditButton>
                <TodoItemDeleteButton onClick={() => deleteTodo(todo.guid)}>
                  Delete
                </TodoItemDeleteButton>
              </TodoItem>
            ))}
          </TodoList>
        </TodoContainer>
      </RootContainer>
    </>
  );
}
