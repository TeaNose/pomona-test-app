import React, { useState, useContext } from 'react';
import { View, Image, Text, TextInput, ScrollView, TouchableWithoutFeedback, ToastAndroid, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from '../../components/button';
import Radio from '../../components/radio';
import Loader from '../../components/loader';

import styles from './styles';
import Color from '../../themes/Color';

import { UserContext } from '../../context/user';
import { callToDoListApi, callEditToDoListApi } from '../../services';

export default function Detail(props) {
  const { navigation } = props;
  const userContext = useContext(UserContext);
  const detailParam = navigation.getParam('item');

  const options = [
    {
      label: 'High',
      value: 1
    },
    {
      label: 'Low',
      value: 0
    }
  ];

  const [id, setId] = useState(detailParam ? detailParam.id : -99);
  const [title, setTitle] = useState(detailParam ? detailParam.title : '');
  const [notes, setNotes] = useState(detailParam ? detailParam.note : '');
  const [selected, setSelected] = useState(detailParam && detailParam.priority === 1 ? options[0] : options[1]);
  const [isLoading, setIsLoading] = useState(false);

  const submitEdit = () => {
    setIsLoading(true);
    const params = {
      id,
      title,
      note: notes,
      priority: selected.value,
    };
    callEditToDoListApi(params)
      .then(response => {
        console.log('response edit task: '+JSON.stringify(response));
        ToastAndroid.show(
          'Data has been successfully updated',
          ToastAndroid.SHORT
        );
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        alert(error.message);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Loader modalVisible={isLoading} />
      <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingTop: 10, backgroundColor: Color.PRIMARY_COLOR }}>
        <View style={{ flex: 9, justifyContent: 'center' }}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Ionicons name={'ios-arrow-back'} size={25} color={Color.SECONDARY_COLOR} />
          </TouchableWithoutFeedback>
        </View>
        {
          navigation.getParam('type') === 'Edit' ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
            <Ionicons name={'ios-trash'} size={25} color={Color.SECONDARY_COLOR} />
          </View> : null
        }
       
      </View>
      <ScrollView>
        <LinearGradient
          style={styles.formContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[Color.PRIMARY_COLOR, Color.SECONDARY_COLOR]}
        >
          <Text style={styles.inputLabel}>Title</Text>
          <TextInput
            placeholder={'To Do Title Goes Here'}
            style={styles.titleInput}
            onChangeText={text => setTitle(text)}
            value={title}
          />
          <Text style={styles.inputLabel}>Notes</Text>
          <TextInput
            placeholder={'Your Notes Goes Here'}
            style={styles.notesInput}
            onChangeText={text => setNotes(text)}
            value={notes}
          />
          <Text style={styles.inputLabel}>Priority</Text>
          <Radio
            options={options}
            isSelected={selected}
            setSelected={item => {
              setSelected(item);
            }}
          />
          <Button
            isPrimary
            title={'SAVE'}
            buttonStyle={styles.button}
            onPress={() => {
              Alert.alert(
                'Edit Task',
                'Are you sure you want to edit this task?',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {text: 'Ok', onPress: () => submitEdit()},
                ]
              );
            }}
           />
        </LinearGradient>
      </ScrollView>
    </View>
  );
}
