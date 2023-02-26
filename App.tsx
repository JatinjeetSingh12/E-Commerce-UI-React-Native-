import React, { FC } from "react";
import { NativeBaseProvider } from "native-base";
import Homepage from './src/BottomTabs_Screens/Homepage';

const App: FC = () => {
  return (
    <NativeBaseProvider>
      <Homepage />
    </NativeBaseProvider>
  );
}

export default App