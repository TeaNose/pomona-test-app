import React from 'react';
import { Modal, ActivityIndicator, View } from 'react-native';

import styles from './styles';

export default function Loader(props) {
  const { modalVisible } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}
    >
      <View style={styles.mainContainer}>
        <ActivityIndicator size={'large'} color="white" />
      </View>
    </Modal>
  );
}
