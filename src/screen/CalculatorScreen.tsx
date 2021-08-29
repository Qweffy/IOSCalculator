import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {ButtonCalculator} from '../components/ButtonCalculator';
import {useCalculator} from '../hooks/useCalculator';

export type CalculatorScreenProps = {};

export const CalculatorScreen: React.FC<CalculatorScreenProps> = () => {
  const {
    lastNumber,
    clean,
    positiveNegative,
    btnDelete,
    btnDivide,
    buildNumber,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
    number,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {lastNumber !== '0' && (
        <Text style={styles.littleResult}>{lastNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalculator buttonText="C" buttonColor="#9B9B9B" action={clean} />
        <ButtonCalculator
          buttonText="+/-"
          buttonColor="#9B9B9B"
          action={positiveNegative}
        />
        <ButtonCalculator
          buttonText="del"
          buttonColor="#9B9B9B"
          action={btnDelete}
        />
        <ButtonCalculator
          buttonText="/"
          buttonColor="#FF9427"
          action={btnDivide}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator buttonText="7" action={buildNumber} />
        <ButtonCalculator buttonText="8" action={buildNumber} />
        <ButtonCalculator buttonText="9" action={buildNumber} />
        <ButtonCalculator
          buttonText="X"
          buttonColor="#FF9427"
          action={btnMultiply}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator buttonText="4" action={buildNumber} />
        <ButtonCalculator buttonText="5" action={buildNumber} />
        <ButtonCalculator buttonText="6" action={buildNumber} />
        <ButtonCalculator
          buttonText="-"
          buttonColor="#FF9427"
          action={btnSubtract}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator buttonText="1" action={buildNumber} />
        <ButtonCalculator buttonText="2" action={buildNumber} />
        <ButtonCalculator buttonText="3" action={buildNumber} />
        <ButtonCalculator
          buttonText="+"
          buttonColor="#FF9427"
          action={btnAdd}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator buttonText="0" action={buildNumber} bigButton />
        <ButtonCalculator buttonText="." action={buildNumber} />
        <ButtonCalculator
          buttonText="="
          buttonColor="#FF9427"
          action={calculate}
        />
      </View>
    </View>
  );
};
