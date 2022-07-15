import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 3.4rem;

  padding: 0 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray[500]};
  outline: none;
  border-radius: 8px;

  background-color: ${(props) => props.theme.colors.gray[500]};
  color: ${(props) => props.theme.colors.gray[100]};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[300]};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.purple.dark};
  }
`;
