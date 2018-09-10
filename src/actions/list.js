import { ADD_ITEM, REMOVE_ITEM } from '../constants/ActionTypes';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    item,
  };
}
