import styled from "styled-components";

export const SelectedCartContainer = styled.li`
  position: relative;
  width: 750px;
  height: 350px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: var(--white-color);
  margin: 10px;
`;

export const XButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--white-color);
  margin-top: 10px;
  margin-right: 8px;
`;

export const SelectedCartImage = styled.img`
  width: 60%;
  height: 310px;
  margin-left: 20px;
  object-fit: cover;
  border-radius: 12px;
`;

export const CartTitleCont = styled.div`
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
  line-height: 1.5;
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