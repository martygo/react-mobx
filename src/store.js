import { createContext, useContext } from "react";
import todoStore from "./store/TodoStore";

const store = {
	stories: todoStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
	return useContext(StoreContext);
};

export default store;
