import { observable, computed, action, decorate } from "mobx";
import React from "react";

class CounterStore {
  count = 0;

  increment() {
    this.count++;
  }
}

decorate(CounterStore, {
  count: observable,
  increment: action
});
export const CounterStoreContext = React.createContext(new CounterStore());
