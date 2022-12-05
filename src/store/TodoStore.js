import { makeAutoObservable } from "mobx";

const todoStore = () => {
  return makeAutoObservable({
    list: [],
  });
};

export default todoStore;