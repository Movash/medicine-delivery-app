import styled from 'styled-components';

export const ShoppingCartCont = styled.div`
  margin-top: 60px;
`;
export const ContentCartCont = styled.div`
  display: flex;
  height: calc(85vh - 60px);
  border-bottom: 3px solid var(--sky-blue-color);
`;

export const LeftBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightBlock = styled.div`
  height: 100%;
  width: 50%;
  background-color: var(--gray-color);
  border-left: 3px solid var(--sky-blue-color);
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
  background-color: var(--white-color);
  margin: 10px;
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

export const XButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--white-color);
  margin-top: 10px;
  margin-right: 8px;
`;

export const AdditionalBlock = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const SelectedCardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  height: calc(100% - 87.6px);
`;

export const SelectedTotal = styled.p`
  margin-right: 200px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.43;
`;

export const SubmitButton = styled.button`
  margin-right: 50px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.43;
  color: var(--white-color);
  border-radius: 16px;
  padding: 12px 100px;
  background-color: var(--sky-blue-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: var(--blue-color);
  }
`;

export const SelectedTotalNumber = styled.span`
  color: var(--sky-blue-color);
`;
