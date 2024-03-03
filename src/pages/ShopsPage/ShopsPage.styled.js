import styled from 'styled-components';

export const ShopsCont = styled.div`
  margin-top: 100px;
  display: flex;
`;

export const LeftBlock = styled.div`
  width: 25%;
  border-right: 1px solid var(--blue-color);
`;

export const RightBlock = styled.div`
  width: 75%;
`;

export const ShopHeader = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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

export const CardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardContainer = styled.div`
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin: 15px 0;
`;

export const AddButton = styled.button`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: var(--white-color);
  border-radius: 12px;
  padding: 12px 50px;
  background-color: var(--sky-blue-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--blue-color);
  }
`;
