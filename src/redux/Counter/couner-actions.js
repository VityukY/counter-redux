import actionTypes from './couner-types';

export const increment = value => ({
   type: actionTypes.INCREMETN,
   payload: value,
});
export const decrement = value => ({
   type: actionTypes.DECREMENT,
   payload: value,
});

export const saveStep = newStep => ({
   type: actionTypes.SET_STEP,
   payload: newStep,
});

export const zeroStep = () => ({
   type: actionTypes.ZERO_STEP,
   payload: 1,
});
