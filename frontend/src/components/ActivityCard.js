import React from 'react';
import { Link } from 'react-router-dom';

function ActivityCard({ activity, onDelete }) {
  return (
    <div className="card" role="article">
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
      <div className="meta">
        <div style={{color:'#374151', fontSize:13}}>{activity.date || 'No date'}</div>
        <div>
          <Link to={`/edit/${activity._id}`} className="btn ghost" style={{marginRight:8}}>Edit</Link>
          <button className="btn danger" onClick={()=>onDelete(activity._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
