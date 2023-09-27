import "./styles.css";
import Sigup from "./Component/Signup";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <Container className="d-flex align-items-center 
      justify-content-center"
      style={{ minHeight:"100vh" }}>
        <div className="w-100" style={{ maxWidth:'400px'}}>
          <Sigup />
        </div>
      </Container>
    </div>
  );
}
