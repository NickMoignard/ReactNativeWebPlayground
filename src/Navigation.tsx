import { NavigationStoreContext } from "../shared/NavigationStore";
import { useContext } from "react";
import { observer } from "mobx-react";

export const Navigation = observer(() => {
  const navigationStore = useContext(NavigationStoreContext);

  return null;
});
