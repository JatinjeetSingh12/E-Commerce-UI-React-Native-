import React, { FC } from "react";
import { NativeBaseProvider } from "native-base";
import Homepage from './src/screens/Homepage';


const App: FC = () => {
  return (
    <NativeBaseProvider>
      <Homepage />
    </NativeBaseProvider>
  );
}


export default App