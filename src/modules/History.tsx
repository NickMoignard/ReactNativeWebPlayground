import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { observer } from "mobx-react";
import { NavigationStoreContext } from "../../shared/NavigationStore";

interface Props {}

export const History: React.FC<Props> = observer(() => {
  const navigationStore = useContext(NavigationStoreContext);
  return (
    <View>
      <Text>History Page</Text>
      <Button onPress={() => navigationStore.backwards()} title="back" />
    </View>
  );
});
