import { styled } from 'styled-components';

export const UserFormInput = styled.input`
  font-size: 14px;
  line-height: 1.29;
  width: 100%;
  height: 46px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  background-color: var(--second-gray-color);
  text-indent: 12px;
  outline: none;
  padding-top: 2px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: var(--active-color);
  }

  &.input-error {
    border-color: var(--error-color);
  }

  &.input-success {
    border-color: var(--success-color);
  }
`;

export const InputsCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const InputCont = styled.div`
  width: 50%;
`;

export const NotifyCont = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

export const NotifyDescr = styled.p`
  font-size: 12px;
  letter-spacing: 0.01em;

  &.error {
    color: var(--error-color);
  }

  &.success {
    color: var(--success-color);
  }
`;
