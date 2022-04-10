import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

export const Root = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSize(Math.random() * 100);
    }, 500);
  }, []);

  return (
    <div
      css={css`
        color: #594cbd;
        transition: all 0.5s ease;
        border: ${size}px solid green;

        background-color: cornsilk;

        .foo {
          outline: 8px solid yellow;
        }
      `}
    >
      <div
        className="foo"
        css={css`
          border: 2px solid red;
        `}
      >
        Test
      </div>
      <br />
      root root root
      <MyComponent
        css={css`
          border-color: blue;
        `}
      />
    </div>
  );
};

const MyComponent = ({ className }: { className?: string }) => {
  return (
    <div
      className={className}
      css={css`
        border: 10px solid red;
      `}
    >
      my component
    </div>
  );
};
const $MyStyledComponent = styled.div`
  border: 2px solid pink;
`;
