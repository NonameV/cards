import { createContext, useContext, useReducer, useMemo } from "react";
import { sleep, getUsers } from "../utils";

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const initState = {
  items: [],
  status: "idle",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "pending":
      return { ...state, status: "pending", error: "" };
    case "resolved":
      return {
        ...state,
        items: [...state.items, action.item],
        status: "resolved",
        error: "",
      };
    case "rejected":
      return { ...state, status: "rejected", error: action.error };
    case "itemDeleted":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "userExist":
      return { ...state, error: action.error };
    default:
      throw Error("no cases");
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const memoState = useMemo(() => state, [state]);
  return (
    <AppStateContext.Provider value={memoState}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
export const useDispatchContext = () => {
  const context = useContext(AppDispatchContext);
  if (!context) {
    throw Error("useAppContext should be called withing AppContext");
  }
  return context;
};

export const useAppContext = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw Error("useAppContext should be called withing AppContext");
  }
  return context;
};

export const useAddItem = () => {
  const state = useAppContext();
  const dispatch = useDispatchContext();
  const { items } = state;
  function addItem(userName) {
    if (items.find((v) => v.login.toLowerCase() === userName.toLowerCase())) {
      dispatch({ type: "userExist", error: "user already exist" });
      return;
    }
    dispatch({ type: "pending" });
    getUsers(userName).then(
      (item) => {
        dispatch({ type: "resolved", item });
      },
      (error) => {
        dispatch({ type: "rejected", error });
      }
    );
  }
  return { state, addItem };
};

export const useDeleteUser = () => {
  const dispatch = useDispatchContext();
  return function deleteUser(id) {
    dispatch({ type: "itemDeleted", id });
  };
};

export default AppStateContext;
