import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Body = styled.p`
  text-align: justify;
  color: #8c8c8c;
  line-height: 24px;
`;

export const Title = styled.h3`
  font-size: 40px;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  color: #08979c;
`;

export const Button = styled.button`
  width: 100px;
  margin-bottom: 20px;
  display: block;
  padding: 10px;
  border-radius: 4px;
  outline: 0;
  border: 0;
  background-color: #08979c;
  color: #fff;
  :hover {
    background-color: #87e8de;
  }
`;
