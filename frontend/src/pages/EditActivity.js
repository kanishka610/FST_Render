import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateActivityAPI } from '../features/activitySlice';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditActivity() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/activities/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setDesc(res.data.description);
        setDate(res.data.date);
      });
  }, [id]);

  const handleSubmit = async () => {
    await dispatch(updateActivityAPI({ id, data: { title, description: desc, date } }));
    navigate('/list');
  }

  return (
    <div>
      <h2>Edit Activity</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
}

export default EditActivity;
