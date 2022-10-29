import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Activity from "../components/Activity";
import { getActivity } from "../redux/todo/todoSlice";

const Home = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.todo.activity);

  useEffect(() => {
    dispatch(getActivity());
  }, []);

  return <Activity data={activities.data.data} />;
};

export default Home;
