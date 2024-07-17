import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    padding: 1rem;
    flex: 1;

    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme["gray-300"]};
    background: ${(props) => props.theme["gray-900"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-weight: bold;
    border: 1px solid ${(props) => props.theme["green-300"]};
    border-radius: 6px;
    color: ${(props) => props.theme["green-300"]};
    background: transparent;
    transition: all 0.2s;

    &:hover {
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme["green-500"]};
    }
  }
`;
