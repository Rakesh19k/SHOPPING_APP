import { BrowserRouter as Router } from "react-router-dom"
import { DataProvider } from "./components/Context";
import Header from "./components/Header"
import Section from "./components/Section"


function App() {
  return (
    <DataProvider >
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
