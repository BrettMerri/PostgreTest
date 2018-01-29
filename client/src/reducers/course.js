import { ADD_COURSE } from '../actions/courseActions';

const initialState = {
  courses: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        courses: {
          ...state.courses,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name,
          },
        },
      };
    default:
      return state;
  }
};
