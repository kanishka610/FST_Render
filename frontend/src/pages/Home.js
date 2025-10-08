import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>🌍 Mini Volunteering App</h1>
          <p>Manage activities, invite volunteers, and keep track of events.</p>
        </div>
        <div>
          <Link to="/add" className="btn primary">+ Add Activity</Link>
          <Link to="/list" className="btn ghost" style={{marginLeft:8}}>View Activities</Link>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Get started</h3>
          <p>Create your first volunteering activity using the Add Activity button.</p>
          <div style={{marginTop:12}}>
            <Link to="/add" className="btn primary">Create Activity</Link>
          </div>
        </div>

        <div className="card">
          <h3>Tips</h3>
          <p>Use clear titles and dates. Assign a location and number of volunteers needed for better coordination.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
