function ActivityCard({ activity, onDelete }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
      <p>{activity.date}</p>
      <button onClick={() => onDelete(activity._id)}>Delete</button>
    </div>
  );
}

export default ActivityCard;
