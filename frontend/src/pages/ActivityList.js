import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities, deleteActivityAPI } from '../features/activitySlice';
import { Link } from 'react-router-dom';

function ActivityList() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.activities.list);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const handleDelete = async (id) => {
    dispatch(deleteActivityAPI(id));
  }

  return (
    <div>
      <h2>Activity List</h2>
      {list.map(act => (
        <div key={act._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{act.title}</h3>
          <p>{act.description}</p>
          <p>{act.date}</p>
          <Link to={`/edit/${act._id}`}>Edit</Link>
          <button onClick={() => handleDelete(act._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ActivityList;
