import styled, { css } from 'styled-components';

type ProgressBarProps = {
  currentValue: number;
  maxValue?: number;
};

const StyledProgressBar = styled.div<ProgressBarProps>`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${({ currentValue }) =>
    currentValue &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -1rem;
        height: 100%;
        background-color: greenyellow;
        border-radius: 1rem;
        width: ${currentValue}%;
        animation: progress 1s ease-in-out;
      }

      @keyframes progress {
        from {
          width: 0;
        }
        to {
          width: ${currentValue};
        }
      }
    `};
`;

const ProgressBar = ({ currentValue }: ProgressBarProps) => {
  function calcProgress() {
    return (100 * (currentValue / 100)) / 25;
  }

  const value = calcProgress();

  return <StyledProgressBar currentValue={value} />;
};

export default ProgressBar;
