import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateActivityAPI } from "../features/activitySlice";

function EditActivity() {
  const { id } = useParams(); // Get activity ID from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activities = useSelector((state) => state.activities.list);
  const activity = activities.find((act) => act._id === id);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  // Populate form with existing activity data
  useEffect(() => {
    if (activity) {
      setTitle(activity.title);
      setDate(activity.date);
      setDescription(activity.description || "");
    }
  }, [activity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateActivityAPI({ id, updatedActivity: { title, date, description } }));
    navigate("/"); // redirect to home or activity list
  };

  if (!activity) return <p>Loading activity...</p>;

  return (
    <div>
      <h2>Edit Activity</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></textarea>
        <button type="submit">Update Activity</button>
      </form>
    </div>
  );
}

export default EditActivity;
