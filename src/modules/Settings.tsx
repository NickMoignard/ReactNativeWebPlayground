import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { observer } from "mobx-react";
import { NavigationStoreContext } from "../../shared/NavigationStore";
import "../App.css";

interface Props {}

export const Settings: React.FC<Props> = observer(() => {
  const navigationStore = useContext(NavigationStoreContext);
  return (
    <View>
      <Text>Settings Page</Text>
      <Button onPress={() => navigationStore.backwards()} title="back" />
    </View>
  );
});
