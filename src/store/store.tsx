import { ReactNode } from "react";
import { createStore } from "redux";
import {
  Provider as ReduxProvider,
  useDispatch,
  useSelector,
} from "react-redux";
import { rootReducer } from "./reducers";

function createRootStore() {
  return createStore(rootReducer);
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
  const store = createRootStore();

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

export type IRootStore = ReturnType<typeof createRootStore>;

export type IRootState = ReturnType<IRootStore["getState"]>;

export type IRootDespatcher = IRootStore["dispatch"];

export type IAccessRootStore = {
  state: IRootState;
  dispatch: IRootDespatcher;
};

export function accessRootStore(): IAccessRootStore {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const state = useSelector((state: IRootState) => state);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  return {
    state,
    dispatch,
  };
}
