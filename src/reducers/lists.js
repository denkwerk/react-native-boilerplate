import { ADD_ITEM, REMOVE_ITEM } from '../constants/ActionTypes';

const initialState = {
  list0: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list0: [...state.list0, action.item],
      };
      
    case REMOVE_ITEM:
      return {
        ...state,
        list0: state.list0.filter(item => item !== action.item),
      };

    default:
      return state;
  }
};
