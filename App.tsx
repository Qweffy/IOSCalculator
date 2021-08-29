import React from 'react';
import {CalculatorScreen} from './src/screen/CalculatorScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './src/theme/appTheme';

export type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
