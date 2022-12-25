import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRouter from "./pageRouter";
import { AuthContextProvider } from "./store/AuthContextProvider";
import { AdminAuthContextProvider } from "./store/AdminAuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AdminAuthContextProvider>
          <PageRouter />
        </AdminAuthContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
