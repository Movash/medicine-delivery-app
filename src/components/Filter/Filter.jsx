import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FilterDescrWrap, FiltersWrap } from './Filter.styled';
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
            '.MuiInputBase-formControl': {
              height: '48px',
              width: '224px',
              fontWeight: 500,
              fontSize: '18px',
              color: '#121417',
            },
            '.MuiSelect-icon': {
              color: 'var(--black-color)',
            },
          }}
        >
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 224,
                  maxWidth: 272,
                  marginTop: 4,
                  border: '1px solid var(--black-opacity-5-color)',
                  borderRadius: '14px',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '1.25',
                  background: 'var(--white-color)',
                  color: 'var(--black-opacity-20-color)',
                },
              },
            }}
            sx={{
              width: 194,
              height: 52,
              borderRadius: '14px',
              background: 'var(--gray-color)',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
            value={sortOrder}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            onChange={handleSortChange}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem
              sx={{
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '1.25',
                color: 'var(--black-opacity-20-color)',
                transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  color: 'var(--black-color)',
                  background: 'none',
                },
                '&.Mui-selected': {
                  color: 'var(--black-color)',
                  background: 'none',
                  '&:hover': {
                    background: 'none',
                  },
                },
              }}
              value=""
            >
              Sort by price
            </MenuItem>
            <MenuItem
              sx={{
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '1.25',
                color: 'var(--black-opacity-20-color)',
                transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  color: 'var(--black-color)',
                  background: 'none',
                },
                '&.Mui-selected': {
                  color: 'var(--black-color)',
                  background: 'none',
                  '&:hover': {
                    background: 'none',
                  },
                },
              }}
              value="asc"
            >
              Ascending
            </MenuItem>
            <MenuItem
              sx={{
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '1.25',
                color: 'var(--black-opacity-20-color)',
                transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  color: 'var(--black-color)',
                  background: 'none',
                },
                '&.Mui-selected': {
                  color: 'var(--black-color)',
                  background: 'none',
                  '&:hover': {
                    background: 'none',
                  },
                },
              }}
              value="desc"
            >
              Descending
            </MenuItem>
          </Select>
        </FormControl>
      </FilterDescrWrap>
    </FiltersWrap>
  );
};

export default Filter;
