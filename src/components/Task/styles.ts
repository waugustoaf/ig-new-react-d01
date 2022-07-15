import styled from 'styled-components';

interface TitleProps {
  done?: boolean;
}

export const Container = styled.div`
  padding: 1rem;

  background-color: ${(props) => props.theme.colors.gray[500]};
  border: 1px solid ${(props) => props.theme.colors.gray[400]};
  border-radius: 8px;

  display: flex;
  align-items: flex-start;
`;

export const ToggleDoneButton = styled.button`
  outline: none;
  border: none;
  background: none;

  color: ${(props) => props.theme.colors.blue.dark};

  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.blue.main};
  }
`;

export const Title = styled.p<TitleProps>`
  flex: 1;

  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
  margin: 0.5rem 0.75rem 0;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 2px;
  color: ${(props) => props.theme.colors.gray[300]};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[400]};
    color: ${(props) => props.theme.colors.danger};
  }
`;
