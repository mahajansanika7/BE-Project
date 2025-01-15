import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Factory from './Factory';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
        {/* <h1>Sugarcane Price Calculator</h1> */}
        <label>Standard Sugarcane Price: </label>
        {/* <input type="text" placeholder="Enter price per kg" /> */}

        <label>Total Sugarcane Quantity:</label>
        <input type="text" placeholder="Enter quantity" />
        {/* <h4>Select the Factory</h4> */}
        <Router>
            
          <div>
            <h4>Select the Factory</h4>
            
                <Link to="/factory/1">Factory 1</Link>
              
                <Link to="/factory/2">Factory 2</Link>
              
                <Link to="/factory/3">Factory 3</Link>
              
                <Link to="/factory/4">Factory 4</Link>
              
          </div>
          <Routes>
            {/* <Route path="/" element={<App />} /> Factory list page */}
            <Route path="/factory/:factoryId" element={<Factory />} /> {/* Factory form page */}
                {/* <Route path="/factory_form" element={<Factory />} /> */}
          </Routes>
        </Router>

        <p className="note">Note: All values are approximate.</p>
    </div>
  );
}

export default App;