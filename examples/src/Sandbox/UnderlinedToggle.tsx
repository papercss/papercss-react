import styled, { css } from "react-emotion";

function wavyUnderline(underlineColor: string) {
  return css`
    background-image: linear-gradient(
        5deg,
        transparent 65%,
        ${underlineColor} 80%,
        transparent 90%
      ),
      linear-gradient(
        165deg,
        transparent 5%,
        ${underlineColor} 15%,
        transparent 25%
      ),
      linear-gradient(
        165deg,
        transparent 45%,
        ${underlineColor} 55%,
        transparent 65%
      ),
      linear-gradient(
        15deg,
        transparent 25%,
        ${underlineColor} 35%,
        transparent 50%
      );
  `;
}

export const UnderlinedToggle = styled.button`
  text-decoration: none;
  background: transparent;
  background-repeat: repeat-x;
  background-size: 6px 6px;
  background-position: 0 90%;

  border: 0;
  margin: 10px;
  padding: 0;
  width: auto;
  overflow: visible;

  font: inherit;

  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;

  cursor: pointer;

  transition: transform 150ms ease-in;
  &:hover {
    transform: translateY(-2px);
  }

  ${({ active }: { active?: boolean }) => {
    return active ? wavyUnderline("#86a361") : "";
  }};
`;
