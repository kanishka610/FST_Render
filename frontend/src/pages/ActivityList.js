import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../features/activitySlice";
import ActivityCard from "../components/ActivityCard";

function ActivityList() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.list);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return (
    <div>
      {activities.map((activity) => (
        <ActivityCard key={activity._id} activity={activity} />
      ))}
    </div>
  );
}

export default ActivityList;
