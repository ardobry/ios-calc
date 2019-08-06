import React from "react";
import { Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";

const Button: React.FC<Prop> = props => {
  const pressHandler = (value: string) => {
    props.press(value);
  };

  return (
    <TouchableOpacity
      onPress={() => pressHandler(props.value)}
      style={[styles.btn, styles[props.type]]}
    >
      <Text
        style={
          props.type === "button0"
            ? [styles.btnSize, { alignSelf: "flex-start", marginLeft: 30 }]
            : styles.btnSize
        }
      >
        {props.value}
      </Text>
    </TouchableOpacity>
  );
};

interface Prop {
  value: string;
  type: string;
  press: (e: string) => void;
}
interface Styles {
  [key: string]: any;
}
const styles: Styles = {
  btn: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 50,
    justifyContent: "space-around",
    margin: 7,
    marginLeft: 10
  },
  btnSize: {
    fontSize: 30,
    color: "white"
  },
  number: {
    backgroundColor: "#333"
  },
  button0: {
    backgroundColor: "#333",
    flex: 2
  },
  dot: {
    backgroundColor: "#333"
  },
  changer: {
    backgroundColor: "#a5a5a5"
  },
  operation: {
    backgroundColor: "#f59703",
    marginRight: 10
  }
};

export default Button;
