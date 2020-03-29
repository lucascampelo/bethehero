import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar, View } from 'react-native';
import Constants from 'expo-constants';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{height: Constants.statusBarHeight, backgroundColor: '#E02041'}} />
      <Routes />
    </>
  );
}