import React from "react";
import { NativeBaseProvider } from "native-base";
import Homepage from './src/screens/Homepage';


export default function App() {
  return (
    <NativeBaseProvider>
      <Homepage />
    </NativeBaseProvider>
  );
}
