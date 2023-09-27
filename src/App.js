import "./styles.css";
import Sigup from "./Component/Signup";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Sigup />
      </Container>
    </div>
  );
}
