import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  background-color: #F2F2F2;
`;

const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px auto;
  padding: 10px 20px;
  text-align: left;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #444;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px rgba(30, 144, 255, 0.2);
  }
`;

const AddBtn = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: blue;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: blueviolet;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

export { Form, Input, AddBtn };
