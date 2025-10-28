import React from 'react';
import { View } from 'react-native';
import CartTab from './Features/cart'; // submodule
import HomeTab from './Features/home'; // submodule

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HomeTab />
      <CartTab />
    </View>
  );
}