import shortid from "shortid";

export const ADD_COURSE = "ADD_COURSE";

export const addCourse = name => ({
  type: ADD_COURSE,
  payload: {
    id: shortId.generate(),
    name,
  },
});
