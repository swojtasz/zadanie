import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const ChildrenContainer = styled.div`
  width: 100%;
  margin: 0;
`;

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};
