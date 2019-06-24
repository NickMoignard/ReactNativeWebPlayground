import { decorate, observable, action } from "mobx";
import { createContext } from "react";

class NavigationStore {
  path = "History";

  forwards = nextPage => {
    this.path = `${this.path}/${nextPage}`;
  };
  backwards = () => {
    var pages = this.path.split("/").slice(0, -1);
    this.path = pages.join("/");
  };
}

decorate(NavigationStore, {
  path: observable,
  forwards: action,
  backwards: action
});

export const NavigationStoreContext = createContext(new NavigationStore());
