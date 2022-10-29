import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACTIVITY_URL, EMAIL_PARAMS, TODO_URL } from "../../constants";

export const getActivity = createAsyncThunk("todo/getActivity", async () => {
  const response = await fetch(ACTIVITY_URL + EMAIL_PARAMS);
  return response.json();
});

export const createActivity = createAsyncThunk(
  "todo/createActivity",
  async (payload) => {
    const response = await fetch(ACTIVITY_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
);

export const updateActivity = createAsyncThunk(
  "todo/updateActivity",
  async (payload) => {
    const response = await fetch(ACTIVITY_URL + payload.id, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response.json();
  }
);

export const deleteActivity = createAsyncThunk(
  "todo/deleteActivity",
  async (id) => {
    const response = await fetch(ACTIVITY_URL + id, { method: "DELETE" });

    if (response.ok) {
      const result = await fetch(ACTIVITY_URL + EMAIL_PARAMS);
      return result.json();
    }
  }
);

export const getActivityDetail = createAsyncThunk(
  "todo/getActivityDetail",
  async (id) => {
    const response = await fetch(ACTIVITY_URL + id);
    return response.json();
  }
);

export const createTodo = createAsyncThunk(
  "todo/createTodo",
  async (payload) => {
    const response = await fetch(TODO_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
);

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async (payload) => {
    const { id, activity_group_id, ...body } = payload;

    const response = await fetch(TODO_URL + id, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await fetch(ACTIVITY_URL + activity_group_id);
      return result.json();
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (payload) => {
    const response = await fetch(TODO_URL + payload.id, { method: "DELETE" });

    if (response.ok) {
      const result = await fetch(ACTIVITY_URL + payload.groupId);
      return result.json();
    }
  }
);

const initialState = {
  activity: {
    data: [],
    isLoading: false,
  },
  createActivity: {
    isLoading: false,
  },
  detailActivity: {
    data: [],
    isLoading: false,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: {
    [getActivity.fulfilled]: (state, action) => {
      state.activity = {
        data: action.payload,
        isLoading: false,
      };
    },
    [getActivity.pending]: (state) => {
      state.activity = {
        ...state.activity,
        isLoading: true,
      };
    },

    [deleteActivity.fulfilled]: (state, action) => {
      state.activity = {
        data: action.payload,
        isLoading: false,
      };
    },
    [deleteActivity.pending]: (state) => {
      state.activity = {
        ...state.activity,
        isLoading: true,
      };
    },

    [createActivity.fulfilled]: (state, action) => {
      state.activity.data.data.push(action.payload);
      state.createActivity.isLoading = false;
    },
    [createActivity.pending]: (state) => {
      state.createActivity.isLoading = true;
    },

    [getActivityDetail.fulfilled]: (state, action) => {
      state.detailActivity = {
        data: action.payload,
        isLoading: false,
      };
    },
    [getActivityDetail.pending]: (state) => {
      state.detailActivity = {
        ...state.detailActivity,
        isLoading: true,
      };
    },

    [createTodo.fulfilled]: (state, action) => {
      state.detailActivity.data.todo_items = [
        action.payload,
        ...state.detailActivity.data.todo_items,
      ];
      state.detailActivity.isLoading = false;
    },
    [createTodo.pending]: (state) => {
      state.detailActivity.isLoading = true;
    },

    [updateTodo.fulfilled]: (state, action) => {
      state.detailActivity = {
        data: action.payload,
        isLoading: false,
      };
    },
    [updateTodo.pending]: (state) => {
      state.detailActivity = {
        ...state.detailActivity,
        isLoading: true,
      };
    },

    [deleteTodo.fulfilled]: (state, action) => {
      state.detailActivity = {
        data: action.payload,
        isLoading: false,
      };
    },
    [deleteTodo.pending]: (state) => {
      state.detailActivity = {
        ...state.detailActivity,
        isLoading: true,
      };
    },
  },
});

export default todoSlice.reducer;
