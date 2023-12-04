"use client";

import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

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

const AddTodo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    fetch("https://localhost:7085/ToDo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <RootContainer>
        <Wrapper>
          <TitleContainer>
            <Title>Add Todo</Title>
          </TitleContainer>
          <FormContainer>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <FormItem>
                <TextField
                  label="Title"
                  variant="outlined"
                  {...register("title")}
                ></TextField>
              </FormItem>
              <FormItem>
                <TextField
                  label="Description"
                  variant="outlined"
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

export default AddTodo;
