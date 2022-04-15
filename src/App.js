import { useRoutes } from "react-router-dom";
import Navbar from "./components";
import "./App.css";
import routes from "./routes";

function App() {
  return (
    <div className="container">
      <Navbar />
      {useRoutes(routes)}
    </div>
  );
}

export default App;
