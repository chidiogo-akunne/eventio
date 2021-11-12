import { createContext, useContext } from "react";

export type DisplayMode = "grid" | "list";
export type FilterView = "ALL EVENTS" | "FUTURE EVENTS" | "PAST EVENTS";

type AppType = null | {
  displayMode: DisplayMode;
  filterView: FilterView;
  changeDisplayMode: (payload: DisplayMode) => void;
  changeFilterView: (payload: FilterView) => void;
};

const appContext = createContext<AppType>(null);

function useAppContext() {
  const store = useContext(appContext);

  if (!store) {
    throw Error("Cannot use appContext outside of AppProvider");
  }

  return store;
}

const Provider = appContext.Provider;

export { useAppContext, Provider };
