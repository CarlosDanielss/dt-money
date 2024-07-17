import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${(props) => props.theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionsButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;

  font-weight: bold;

  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme["green-500"]};

  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
