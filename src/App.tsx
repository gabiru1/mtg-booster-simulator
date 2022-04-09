import "./App.css";
import { SetsProvider } from "./hooks/useSets";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div id="App ">
      <SetsProvider>
        <Home />
      </SetsProvider>
    </div>
  );
}

export default App;
