import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './couner-actions';

const valueReducer = createReducer(0, {
   [actions.increment]: (state, { payload }) => state + payload,
   [actions.decrement]: (state, { payload }) => state - payload,
});

const stepReducer = createReducer(1, {
   [actions.saveStep]: (_, { payload }) => payload,
   [actions.zeroStep]: state => (state = 1),
});

const complexCounetrReducer = combineReducers({
   counterValue: valueReducer,
   step: stepReducer,
});

export default complexCounetrReducer;
