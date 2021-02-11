import styled from "styled-components";

export const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #08979c;
  display: block;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  color: #b5f5ec;
  font-weight: 400;
  cursor: pointer;
`;

export const Button = styled.p`
  cursor: pointer;
  color: tomato;
  font-weight: 800;
  font-size: 22px;
  background-color: transparent;
`;

export const PostItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  text-align: center;
  background-color: #00474f;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
