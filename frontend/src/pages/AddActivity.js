import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivityAPI } from '../features/activitySlice';
import { useNavigate } from 'react-router-dom';

function AddActivity() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await dispatch(addActivityAPI({ title, description: desc, date }));
    navigate('/list');
  }

  return (
    <div>
      <h2>Add Activity</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddActivity;
