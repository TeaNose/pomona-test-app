import React from 'react';
import {
  Text,
  TextInput as MyTextInput,
  View,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Color from '../../themes/Color';

export default function Radio(props) {
  const { options, isSelected, setSelected } = props;

  const renderRow = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setSelected(item);
        }}
      >
        <View style={styles.itemContainer}>
          <View
            style={{ flex: 1, alignItems: 'center', paddingTop: 6 }}
          >
            <View style={styles.radioContainer}>
              {item.value == isSelected.value ? (
                <View style={styles.radio} />
              ) : null}
            </View>
          </View>
          <View style={{ flex: 9, justifyContent: 'center' }}>
            <Text style={styles.inputLabel}>{item.label}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <FlatList
      data={options}
      extraData={options}
      keyExtractor={item => item.value.toString()}
      renderItem={renderRow}
    />
  );
}
