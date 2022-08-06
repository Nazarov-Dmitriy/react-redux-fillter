import {
  SERVISE_SEACH
} from "./action";

const initialState = {
  listSeach: [],
  isSeach: false,
}


const serviseListSeach = (state = initialState, action) => {
  switch (action.type) {
    case SERVISE_SEACH:
      const {
        arr, seachString
      } = action.payload;

      const arrResult = [];


      arr.forEach((el) => {
        if (el.name.match(new RegExp(`${seachString}`, 'gi')) !== null) {
          arrResult.push(el)
        }
      });

      seachString ? state.isSeach = true : state.isSeach = false;
      return {
        ...state, listSeach: arrResult
      }
      default:
        return state;
  }
};

export default serviseListSeach;