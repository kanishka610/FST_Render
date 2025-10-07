import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddActivity from './pages/AddActivity';
import EditActivity from './pages/EditActivity';
import ActivityList from './pages/ActivityList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddActivity />} />
        <Route path="/edit/:id" element={<EditActivity />} />
        <Route path="/list" element={<ActivityList />} />
      </Routes>
    </Router>
  );
}

export default App;
