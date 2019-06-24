import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { Messages } from "./modules/Messages";
import { Home } from "./modules/Home";
import { Profile } from "./modules/Profile";
import { Collabs } from "./modules/Collabs";
import { Settings } from "./modules/Settings";
import { Header } from "./modules/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = observer(() => {
  return (
    <View style={styles.app}>
      <Header />
      <Router />
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
