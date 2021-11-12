import { PropsWithChildren, useCallback, useMemo, useReducer } from "react";

import { Provider } from "./appContext";
import type { DisplayMode, FilterView } from "./appContext";

const initialState: {
  displayMode: DisplayMode;
  filterView: FilterView;
} = {
  displayMode: "grid",
  filterView: "ALL EVENTS",
};

type FSA = { type: string; payload?: any };

function appReducer(state = initialState, action: FSA) {
  switch (action.type) {
    case "dashboard/change-view": {
      return {
        ...state,
        displayMode: action.payload,
      };
    }

    case "dashboard/change-filter": {
      return {
        ...state,
        filterView: action.payload,
      };
    }

    default:
      throw Error("Use one of the defined app types");
  }
}

function AppProvider({ children }: PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeDisplayMode = useCallback((payload: DisplayMode) => {
    dispatch({ type: "dashboard/change-view", payload });
  }, []);

  const changeFilterView = useCallback((payload: FilterView) => {
    dispatch({ type: "dashboard/change-filter", payload });
  }, []);

  const value = useMemo(
    () => ({
      changeDisplayMode,
      changeFilterView,
      ...state,
    }),
    [state, changeDisplayMode, changeFilterView]
  );

  return <Provider value={value}>{children}</Provider>;
}

export default AppProvider;
