import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  fullSize?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: ${props => props.fullSize ? '100%' : 'auto'};
  height: 3.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.blue.dark};

  padding: 1rem;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 700;
  gap: 0.5rem;

  border: none;
  outline: none;

  transition: background-color 0.3s ease-in-out;

  font-size: 14px;

  &:hover:not(:disabled) {
    background-color: ${({ color, theme }) =>
      color ? color : theme.colors.blue.main};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
