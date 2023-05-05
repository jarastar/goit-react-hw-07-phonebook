import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const Bullet = styled.span`
  display: inline-block;
  vertical-align: middle;
  background-size: 100%;
  height: 10px;
  width: 10px;
  margin-right: 5px;
  background-color: black;
  border-radius: 25px;
`;

const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 14px;
  font-size: 20px;
  border-radius: 6px;
  border: none;
  color: #fff;
  background-color: blue;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover,
  &:focus {
    background-color: blueviolet;
    outline: 0;
  }
`;


export { Item, Bullet, DeleteBtn };