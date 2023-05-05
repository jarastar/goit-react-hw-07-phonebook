import styled from 'styled-components';

const FilterWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const FilterInput = styled.input`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: large;
  margin: 5px auto;
  padding: 5px 15px 5px 15px;
  text-align: left;
`;

export { FilterWrap, FilterInput };