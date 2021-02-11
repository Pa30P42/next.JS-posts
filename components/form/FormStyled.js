import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  width: 300px;
  padding-left: 15px;
  margin-bottom: 10px;
  border: 1px solid #08979c;
`;
export const Textarea = styled.textarea`
  border-radius: 4px;
  width: 300px;
  padding-left: 15px;
  margin-bottom: 10px;
  border: 1px solid #08979c;
`;

export const Label = styled.label`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #08979c;
  display: block;
`;

export const Button = styled.button`
  width: 200px;
  margin: 0 auto;
  display: block;
  padding: 10px;
  border-radius: 4px;
  outline: 0;
  border: 0;
  margin-bottom: 20px;
  background-color: #08979c;
  color: #fff;
  :hover {
    background-color: #87e8de;
  }
`;
