import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to Nateslist</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
