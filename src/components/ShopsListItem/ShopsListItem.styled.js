import styled from 'styled-components';

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

export const SvgHeart = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
  fill: ${({ $active }) =>
    $active ? 'var(--sky-blue-color)' : 'var(--white-color)'};
`;
