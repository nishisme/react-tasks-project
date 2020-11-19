  
import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  stage: 'ALL'
};

export const { setStage } = createActions(
  {
    SET_STAGE: (payload) => payload
  }
)

const reducer = handleActions(
  {
    [setStage]: (_state, { payload }) => {
      return {stage: payload};
    }
  },
  defaultState
);

export default reducer;