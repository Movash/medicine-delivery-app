import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  FilterDescrWrap,
  FiltersWrap,
  formControlInline,
  menuItemSX,
  menuPaper,
  selectSX,
} from './Filter.styled';
import { useState } from 'react';

const Filter = ({ medicines, setSortedMedicines }) => {
  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = evt => {
    const order = evt.target.value;
    setSortOrder(order);
    if (order === 'asc') {
      const sorted = [...medicines].sort((a, b) => a.price - b.price);
      setSortedMedicines(sorted);
    } else if (order === 'desc') {
      const sorted = [...medicines].sort((a, b) => b.price - a.price);
      setSortedMedicines(sorted);
    } else {
      setSortedMedicines([...medicines]);
    }
  };

  return (
    <FiltersWrap>
      <FilterDescrWrap>
        <FormControl
          sx={{
            '.MuiInputBase-formControl': formControlInline.inputBase,
            '.MuiSelect-icon': formControlInline.selectIcon,
          }}
        >
          <Select
            MenuProps={{
              PaperProps: {
                style: { ...menuPaper },
              },
            }}
            sx={selectSX}
            value={sortOrder}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            onChange={handleSortChange}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem sx={menuItemSX} value="">
              Sort by price
            </MenuItem>
            <MenuItem sx={menuItemSX} value="asc">
              Ascending
            </MenuItem>
            <MenuItem sx={menuItemSX} value="desc">
              Descending
            </MenuItem>
          </Select>
        </FormControl>
      </FilterDescrWrap>
    </FiltersWrap>
  );
};

export default Filter;
