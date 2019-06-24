import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "./Navigation";

const App: React.FC = observer(() => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>React Native for Web</Text>
      </View>
      <Navigation />
    </View>
  );
});

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  }
});

export default App;
