import "./styles.css";
import Sigup from "./Component/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Container className="d-flex align-items-center 
      justify-content-center"
      style={{ minHeight:"100vh" }}>
        <div className="w-100" style={{ maxWidth:'400px'}}>
          <Sigup />
        </div>
      </Container>
    </div>
    </AuthProvider>
  );
}
