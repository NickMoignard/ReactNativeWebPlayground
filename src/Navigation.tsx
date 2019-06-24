import { NavigationStoreContext } from "../shared/NavigationStore";
import React, { useContext } from "react";
import { observer } from "mobx-react";
import { History } from "./modules/History";
import { Current } from "./modules/Current";


export const Navigation = observer(() => {
  const navigationStore = useContext(NavigationStoreContext);

  return navigationStore.currentEndpoint === "History" ? (
    <History />
  ) : (
    <Current />
  );
});
