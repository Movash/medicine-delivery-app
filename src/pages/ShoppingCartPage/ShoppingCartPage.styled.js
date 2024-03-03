import styled from 'styled-components';

export const ShoppingCartCont = styled.div`
  margin-top: 100px;
  display: flex;
`;

export const LeftBlock = styled.div`
  width: 50%;
  border-right: 1px solid var(--blue-color);
`;

export const RightBlock = styled.div`
  width: 50%;
`;

export const SelectedCardContainer = styled.div`
  position: relative;
  width: 750px;
  height: 350px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const SelectedCardImage = styled.img`
  width: 60%;
  height: 310px;
  margin-left: 20px;
  object-fit: cover;
  border-radius: 12px;
`;

export const CardTitleCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
`;

export const Price = styled.p`
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 1.5;
  margin-bottom: 20px;
`;

export const CountCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  background-color: var(--gray-color);
  border: 1px solid var(--black-color);
`;

export const CountNumber = styled.p`
  margin-left: 25px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5;
`;

export const ButtonsCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  color: var(--gray-color);
`;

export const CounterButton = styled.button`
  border-radius: 10px;
  background-color: var(--gray-color);
`;

export const XButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--white-color);
  margin-top: 10px;
  margin-right: 8px;
`;
