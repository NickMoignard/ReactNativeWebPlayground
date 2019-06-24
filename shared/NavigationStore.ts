import { decorate, observable, action } from "mobx";
import { createContext } from "react";

type Routes = "History" | "Home";

class NavigationStore {
  path = "Home";
  currentEndpoint = "Home";

  forwards = nextPage => {
    this.currentEndpoint = nextPage;
    this.path = `${this.path}/${nextPage}`;
  };
  backwards = () => {
    var pages = this.path.split("/").slice(0, -1);
    this.currentEndpoint = pages.pop();
    this.path = pages.join("/");
  };
}

decorate(NavigationStore, {
  path: observable,
  forwards: action,
  backwards: action,
  currentEndpoint: observable
});

export const NavigationStoreContext = createContext(new NavigationStore());
