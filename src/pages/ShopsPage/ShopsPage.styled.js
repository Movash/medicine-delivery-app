import styled from 'styled-components';

export const ShopsCont = styled.div`
  margin-top: 60px;
  display: flex;
`;

export const LeftBlock = styled.div`
  width: 25%;
`;

export const RightBlock = styled.div`
  height: calc(100vh - 60px);
  width: 75%;
  border-left: 3px solid var(--sky-blue-color);
  background-color: var(--white-color);
`;

export const ShopList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ShopItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: var(--white-color);
  border-radius: 12px;
  padding: 12px 0;
  background-color: var(--sky-blue-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  margin-bottom: 10px;
  &:hover {
    background-color: var(--blue-color);
  }
`;
