import React from "react";
import { useSelector } from "react-redux";

function VolunteerStats() {
  const activities = useSelector((state) => state.activities.list);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Volunteer Stats</h2>
      <p>Total Activities: {activities.length}</p>
      {/* You can expand: total volunteers, upcoming activities, etc. */}
    </div>
  );
}

export default VolunteerStats;
