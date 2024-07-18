import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: -5rem auto 0;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const SummaryCardIconColors = {
  white: "white",
  "green-300": "green-300",
  "red-300": "red-300",
} as const;

interface SummaryCardProps {
  $variant?: "green";
  $iconColor: keyof typeof SummaryCardIconColors;
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;

  border-radius: 6px;
  background: ${(props) => props.theme["gray-600"]};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};

    svg {
      color: ${(props) => props.theme[SummaryCardIconColors[props.$iconColor]]};
    }
  }

  strong {
    margin-top: 1rem;

    display: block;
    font-size: 2rem;
  }

  ${(props) =>
    props.$variant === "green" &&
    css`
      background: ${props.theme["green-700"]};
    `}
`;
