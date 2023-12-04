"use client";

import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

interface EditTodoProps {
  params: {
    id: string;
  };
}

interface Todo {
  id: string;
  title: string;
  description: string;
}

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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(84, 47%, 55%, 10%);
  padding: 20px;
  border-radius: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const FormLabel = styled.label`
//   font-size: 1.25rem;
//   font-weight: 400;
//   margin: 0;
//   padding: 0;
// `;

const StyledButton = styled(Button)`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding-box: 10px;

  &:hover {
    background-color: #ff0000;
  }
`;

const EditTodo = ({ params }: EditTodoProps) => {
  const id = params.id;
  const [todo, setTodo] = useState({} as Todo);

  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    fetch(`https://localhost:7085/ToDo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  async function getTodoById(id: string) {
    const response = await fetch(`https://localhost:7085/ToDo/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    setTodo({
      id: data.guid,
      title: data.title,
      description: data.description,
    });
    console.log(data);
  }

  useEffect(() => {
    getTodoById(id);
  }, []);

  return (
    <>
      <RootContainer>
        <Wrapper>
          <TitleContainer>
            <Title>Edit Todo</Title>
          </TitleContainer>
          <FormContainer>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <FormItem>
                <TextField
                  placeholder="Title"
                  variant="outlined"
                  defaultValue={todo.title}
                  {...register("title")}
                ></TextField>
              </FormItem>
              <FormItem>
                <TextField
                  placeholder="Description"
                  variant="outlined"
                  defaultValue={todo.description}
                  {...register("description")}
                ></TextField>
              </FormItem>
              <StyledButton variant="contained" type="submit">
                Submit
              </StyledButton>
            </StyledForm>
          </FormContainer>
        </Wrapper>
      </RootContainer>
    </>
  );
};

export default EditTodo;
