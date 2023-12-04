"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

// const Subtitle = styled.p`
//   font-size: 1.5rem;
//   font-weight: 400;
//   margin: 0;
//   padding: 0;
// `;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 2px solid black;
  border-radius: 10px;
  background-color: hsl(84, 47%, 55%, 10%);
  width: 50%;
  padding: 20px;
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
  padding-top: 20px;
  width: 80%;
`;

const TodoItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TodoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
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

const TodoButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 25%;
`;

const TodoItemEditButton = styled(Button)`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 10px;
  padding-box: 20px;

  &:hover {
    background-color: lightblue;
  }
`;

const TodoItemDeleteButton = styled(Button)`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 10px;
  padding-box: 20px;

  &:hover {
    background-color: lightcoral;
  }
`;

const AddTodoButton = styled(Button)`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 10px;
  padding-box: 20px;

  &:hover {
    background-color: lightgreen;
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
        <Wrapper>
          <TitleContainer>
            <Title>Todo</Title>
          </TitleContainer>
          <TodoContainer>
            <TodoTitle>Todo List</TodoTitle>
            <Link href="/addTodo">
              <AddTodoButton variant="contained">
                <AddIcon />
              </AddTodoButton>
            </Link>
            <TodoList>
              {todos.map((todo: any) => (
                <TodoItem key={todo.guid}>
                  <TodoText>
                    <TodoItemTitle>{todo.title}</TodoItemTitle>
                    <TodoItemDescription>
                      {todo.description}
                    </TodoItemDescription>
                  </TodoText>
                  <TodoButtons>
                    <Link href={`/editTodo/${todo.guid}`}>
                      <TodoItemEditButton variant="contained">
                        <EditIcon />
                      </TodoItemEditButton>
                    </Link>
                    <TodoItemDeleteButton
                      variant="contained"
                      onClick={() => deleteTodo(todo.guid)}
                    >
                      <DeleteIcon />
                    </TodoItemDeleteButton>
                  </TodoButtons>
                </TodoItem>
              ))}
            </TodoList>
          </TodoContainer>
        </Wrapper>
      </RootContainer>
    </>
  );
}
