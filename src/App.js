import { BrowserRouter as Router,} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <AppRouter></AppRouter>
    </Router>
  );
}

export default App;
