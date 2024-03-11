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
  background-color: var(--gray-color);
`;

export const ShopHeader = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
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

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  height: calc(100% - 87.6px);
`;

export const CardContainer = styled.li`
  position: relative;
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: var(--white-color);
  margin: 10px;
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
  font-weight: 600;
  font-size: 28px;
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

export const SvgHeart = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
  fill: ${({ $active }) =>
    $active ? 'var(--sky-blue-color)' : 'var(--white-color)'};
`;
