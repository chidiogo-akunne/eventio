import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useReducer
} from 'react';
import { Provider } from './appContext';
import type { DisplayMode, FilterView } from './appContext';

//app initial state
const initialState: {
  displayMode: DisplayMode;
  filterView: FilterView;
} = {
  displayMode: 'grid',
  filterView: 'ALL EVENTS'
};

type FSA = { type: string; payload?: any };

//returns new state depending on the action passed to it, if action passed to it does not exit in action type, it throws an eror
function appReducer(state = initialState, action: FSA) {
  switch (action.type) {
    case 'dashboard/change-view': {
      return {
        ...state,
        displayMode: action.payload
      };
    }

    case 'dashboard/change-filter': {
      return {
        ...state,
        filterView: action.payload
      };
    }

    default:
      throw Error('Use one of the defined app types');
  }
}

//pass data to components it wraps
function AppProvider({ children }: PropsWithChildren<unknown>) {
  //set state globally
  const [state, dispatch] = useReducer(appReducer, initialState);

  //set display mode state
  const changeDisplayMode = useCallback((payload: DisplayMode) => {
    dispatch({ type: 'dashboard/change-view', payload });
  }, []);

  //set filter filter view state
  const changeFilterView = useCallback((payload: FilterView) => {
    dispatch({ type: 'dashboard/change-filter', payload });
  }, []);

  const value = useMemo(
    () => ({
      changeDisplayMode,
      changeFilterView,
      ...state
    }),
    [state, changeDisplayMode, changeFilterView]
  );

  return <Provider value={value}>{children}</Provider>;
}

export default AppProvider;
