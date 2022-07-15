import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main`
  width: 90%;
  max-width: 46rem;
  margin: 0 auto;

  margin-top: -1.7rem;
`;

export const SearchContainer = styled.form`
  display: flex;
  gap: 8px;
`;

export const ListContainer = styled.div`
  margin-top: 4rem;
`;

export const ListHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    strong {
      color: ${({ theme }) => theme.colors.blue.main};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.125rem 0.5rem;
      background-color: ${props => props.theme.colors.gray[400]};
      border-radius: 50px;
    }
  }
`;

export const List = styled.div`
  margin-top: 1.5rem;
`;