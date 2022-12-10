import React from "react";
import { Container } from "semantic-ui-react";
import { Header } from "./Header";
export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
