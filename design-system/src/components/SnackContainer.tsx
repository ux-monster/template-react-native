import React from 'react';
import styled from 'styled-components';

const SnackView = styled.div`
  overflow: hidden;
  background: #f9f9f9;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

type Props = {
  id: string;
};

const SnackContainer = ({id}: Props) => {
  return (
    <section>
      <SnackView
        data-snack-id={id}
        data-snack-platform="web"
        data-snack-preview="true"
        data-snack-theme="light"
      />
    </section>
  );
};

export default SnackContainer;
