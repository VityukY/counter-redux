import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counet/increment');
export const decrement = createAction('counet/decrement');
export const saveStep = createAction('counetr/setStep');
export const zeroStep = createAction('counter/zeroStep');
