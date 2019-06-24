import React, { useContext } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { NavigationStoreContext } from "../../shared/NavigationStore";
import { CounterStoreContext } from "../../shared/CounterStore";

interface Props {}

export const Current: React.FC<Props> = observer(() => {
  const counterStore = useContext(CounterStoreContext);
  const navigationStore = useContext(NavigationStoreContext);

  return (
    <View style={styles.app}>
      <Text style={styles.text}>
        This is an example of an app built with{" "}
        <Link href="https://github.com/facebook/create-react-app">
          Create React App
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/necolas/react-native-web">
          React Native for Web
        </Link>
      </Text>
      <Text style={styles.text}>{navigationStore.path}</Text>
      <Button
        onPress={() => navigationStore.forwards("History")}
        title="forwards"
      />
      <Button onPress={() => navigationStore.backwards()} title="backwards" />

      <Button
        onPress={() => counterStore.count++}
        title={`${counterStore.count}`}
      />
    </View>
  );
});

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});
