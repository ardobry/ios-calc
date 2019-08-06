/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from "react-native";
import { evaluate } from "mathjs";

import Button from "./components/Button";

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      resultValue: "0",
      savedValue: ""
    };
  }

  pressNumber: (e: string) => void = e => {
    let val: string = this.state.resultValue;
    if (val === "0") {
      this.setState({ resultValue: e });
    } else {
      this.setState({ resultValue: val + e });
    }
  };

  pressOperation: (e: any) => void = e => {
    let val: string = this.state.resultValue,
      saved: string = this.state.savedValue;
    if (e !== "=") {
      this.setState({ resultValue: val + e });
    } else {
      if (saved != "") {
        let total: string = (
          (parseInt(saved) / 100) *
          parseInt(val)
        ).toString();
        this.setState({ resultValue: total });
      } else {
        this.setState({ resultValue: evaluate(val) });
      }
    }
  };

  pressChanger: (e: any) => void = e => {
    let value: string = e,
      stateValue: string = this.state.resultValue;
    if (value === "AC") this.setState({ resultValue: "0", savedValue: "" });
    if (value === "+/-") {
      this.setState({ resultValue: "-" + stateValue });
    }
    if (value === "%") {
      this.setState({ savedValue: stateValue, resultValue: "0" });
    }
  };

  render() {
    const numbers7 = ["7", "8", "9"],
      numbers4 = ["4", "5", "6"],
      numbers1 = ["1", "2", "3"],
      changers = ["AC", "+/-", "%"],
      operations = ["/", "*", "-", "+", "="];

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text
            style={{
              color: "white",
              fontSize: 70,
              textAlign: "right",
              paddingTop: 100
            }}
          >
            {this.state.resultValue}
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.stateChangers}>
              {changers.map((item: string, index: number) => (
                <Button
                  press={this.pressChanger}
                  value={item}
                  key={index}
                  type="changer"
                />
              ))}
            </View>
            <View style={styles.row}>
              {numbers7.map((item: string, index: number) => (
                <Button
                  press={this.pressNumber}
                  value={item}
                  key={index}
                  type="number"
                />
              ))}
            </View>
            <View style={styles.row}>
              {numbers4.map((item: string, index: number) => (
                <Button
                  press={this.pressNumber}
                  value={item}
                  key={index}
                  type="number"
                />
              ))}
            </View>
            <View style={styles.row}>
              {numbers1.map((item: string, index: number) => (
                <Button
                  press={this.pressNumber}
                  value={item}
                  key={index}
                  type="number"
                />
              ))}
            </View>
            <View style={styles.row}>
              <Button press={this.pressNumber} value="0" type="button0" />
              <Button press={this.pressNumber} value="." type="dot" />
            </View>
          </View>
          <View style={styles.operations}>
            {operations.map((item: string, index: number) => (
              <Button
                press={this.pressOperation}
                value={item}
                key={index}
                type="operation"
              />
            ))}
          </View>
        </View>
      </View>
    );
  }
}

interface Props {}

interface State {
  [resultValue: string]: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  result: {
    flex: 3,
    justifyContent: "center",
    textAlign: "right"
  },
  stateChangers: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  buttons: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  numbers: {
    flex: 3,
    overflow: "hidden"
  },
  operations: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-between"
  }
});

export default App;
