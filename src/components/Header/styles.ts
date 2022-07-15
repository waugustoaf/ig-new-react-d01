import styled from "styled-components";

export const Container = styled.header`
  height: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.gray[700]};

  img {
    width: 7.8rem;
  }
`;