import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getActivityDetail } from "../redux/todo/todoSlice";
import DetailActivity from "../components/DetailActivity";

const Detail = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.todo.detailActivity);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getActivityDetail(id));
  }, []);

  return (
    <div>
      <DetailActivity
        id={details.data.id}
        title={details.data.title}
        todos={details.data.todo_items}
      />
    </div>
  );
};

export default Detail;
