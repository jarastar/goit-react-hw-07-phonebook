import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';

import { FilterWrap, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <FilterWrap>
      <label>Find contacts by name</label>
      <FilterInput
        type="text"
        name="filter"
        onChange={handleFilter}
        value={filter}
      />
    </FilterWrap>
  );
};

export default Filter;