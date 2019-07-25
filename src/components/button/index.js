import React from 'react';
import { Text } from 'react-native';
import { Button as MyButton } from 'native-base';

import styles from './styles';

export default function Button(props) {
  const { isPrimary, title, onPress, buttonStyle } = props;
  return (
    <MyButton
      style={[
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        buttonStyle,
      ]}
      onPress={() => onPress()}
    >
      <Text style={[isPrimary ? styles.buttonText2 : styles.buttonText1]}>
        {title}
      </Text>
    </MyButton>
  );
}
