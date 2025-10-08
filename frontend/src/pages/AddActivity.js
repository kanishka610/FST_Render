import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity } from "../features/activitySlice";

function AddActivity() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // IMPORTANT
    dispatch(addActivity({ title, date, description }));
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Activity</button>
    </form>
  );
}

export default AddActivity;
