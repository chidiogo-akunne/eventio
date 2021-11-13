import { createContext, useContext } from 'react';

//display mode type
export type DisplayMode = 'grid' | 'list';

//filter view type
export type FilterView = 'ALL EVENTS' | 'FUTURE EVENTS' | 'PAST EVENTS';

//app type
type AppType = null | {
  displayMode: DisplayMode;
  filterView: FilterView;
  changeDisplayMode: (payload: DisplayMode) => void;
  changeFilterView: (payload: FilterView) => void;
};

//create app context
const appContext = createContext<AppType>(null);

//create custom app context
function useAppContext() {
  const store = useContext(appContext);

  if (!store) {
    throw Error('Cannot use appContext outside of AppProvider');
  }

  return store;
}

const Provider = appContext.Provider;

export { useAppContext, Provider };
