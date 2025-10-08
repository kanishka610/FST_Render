import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddActivity from "./pages/AddActivity";
import EditActivity from "./pages/EditActivity";
import ActivityList from "./pages/ActivityList";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import VolunteerStats from "./pages/VolunteerStats";

function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">
        <div className="logo">MV</div>
        <div>
          <div style={{ fontWeight: 700 }}>Mini Volunteering</div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>
            manage local volunteering
          </div>
        </div>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/list">Activities</Link>
        <Link to="/add" className="primary">Add</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddActivity />} />
        <Route path="/edit/:id" element={<EditActivity />} />
        <Route path="/list" element={<ActivityList />} />
        <Route path="/stats" element={<VolunteerStats />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
