import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout'
import Shop from './pages/Shop'

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Layout/>} />
                <Route exact path="home" element={<Home/>} />
                <Route exact path="shop" element={<Shop/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
