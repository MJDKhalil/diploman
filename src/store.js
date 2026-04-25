import { useMemo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

let store;

function initStore(preloadedState) {
  return configureStore({
    reducer: reducers,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // localStorage access in reducer is non-serializable
      }),
  });
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
