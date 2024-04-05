import styled from 'styled-components';

export const FiltersWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
`;

export const FilterDescrWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: var(--white-color);
  border-radius: 12px;
  padding: 12px 50px;
  background-color: var(--sky-blue-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.searchPadding {
    padding: 14px 44px;
  }
  &:hover,
  &:focus {
    background-color: var(--blue-color);
  }
`;

export const formControlInline = {
  inputBase: {
    height: '48px',
    width: '224px',
    fontWeight: 500,
    fontSize: '18px',
    color: '#121417',
  },
  selectIcon: {
    color: 'var(--black-color)',
  },
};