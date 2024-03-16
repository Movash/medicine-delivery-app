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

export const AdditionalBlock = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: end;
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
  &:disabled {
    color: var(--disabled-text-color);
    background-color: var(--disabled-color);
    cursor: not-allowed;
  }
`;

export const SelectedTotalNumber = styled.span`
  color: var(--sky-blue-color);
`;
