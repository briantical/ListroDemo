import React, { Component } from "react";
import { Spinner } from "native-base";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { SpeechToText } from "react-native-watson";
import Permissions from "react-native-permissions";
import DrawerDisplay from "./src/components/DrawerDisplay";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerDisplay />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
