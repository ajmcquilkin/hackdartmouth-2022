import { put, select } from "@redux-saga/core/effects";
import { ActionStatus, Actions, ActionTypes, RootAppState } from "schema";

export const selectStatus = (type: ActionTypes, status: ActionStatus = 'REQUEST') =>
  (action: Actions) => (action.type === type && action.status === status);

export const typedPut = (action: Actions) => put(action);
export const typedSelect = (selector: (state: RootAppState) => any) => select(selector);