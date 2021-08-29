import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

export type ButtonCalculatorProps = {
  buttonText: string;
  buttonColor?: string;
  bigButton?: boolean;
  action: (numberText: string) => void;
};

export const ButtonCalculator: React.FC<ButtonCalculatorProps> = ({
  buttonText,
  buttonColor = '#2D2D2D',
  bigButton,
  action,
}) => {
  return (
    <TouchableOpacity onPress={() => action(buttonText)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: buttonColor,
          width: bigButton ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: buttonColor === '#9B9B9B' ? 'black' : 'white',
          }}>
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
