import { BrowserRouter as Router,} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import Topbar from "./components/UI/Navbar/Topbar";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <AppRouter></AppRouter>
    </Router>
  );
}

export default App;
