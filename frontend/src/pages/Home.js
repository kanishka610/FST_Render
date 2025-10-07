import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>🌍 Mini Volunteering App</h1>
      <Link to="/add">Add Activity</Link> | <Link to="/list">View Activities</Link>
    </div>
  );
}

export default Home;
