import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRouter from "./pageRouter";
import { AuthContextProvider } from "./store/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <PageRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
