import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
//Components
import Navigation from "./components/Navigation"
//Routes
import Counter from "./pages/Counter";
import CurrentCount from "./pages/CurrentCount"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/counter" element={<Counter count={count} setCount={setCount} />}/>
          <Route path="/currentcount" element={<CurrentCount count={count}/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
