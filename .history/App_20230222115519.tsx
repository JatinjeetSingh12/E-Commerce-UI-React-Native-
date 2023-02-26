import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import Homepage from "./screens/Homepage";


export default function App() {
  return (
    <NativeBaseProvider>
      <Homepage />
    </NativeBaseProvider>
  );
}
