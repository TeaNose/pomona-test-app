import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, TextInput, ActivityIndicator, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../../components/loader';

import styles from './styles';

import Color from '../../themes/Color';

import { UserContext } from '../../context/user';
import { callToDoListApi, callEditToDoListApi } from '../../services';

export default function Home(props) {
  const { navigation } = props;
  const userContext = useContext(UserContext);

  const [activeTab, setActiveTab] = useState(0);
  const [q, setQ] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFull, setIsLoadingFull] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const params = {
      q,
      filter: 'all',
      authToken: userContext.authToken,
    };
    callApi(params);
  }, []);
  
  const callApi = (params) => {
    callToDoListApi(params)
      .then(response => {
        console.log('response list: '+JSON.stringify(response));
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        alert(error.message);
      });
  };

  const finishedTask = (item) => {
    setIsLoadingFull(true);
    const params = {
      id: item.id,
      isDone: true,
    };

    callEditToDoListApi(params)
      .then(response => {
        console.log('response finish task: '+JSON.stringify(response));
        setIsLoadingFull(false);
      })
      .catch(error => {
        setIsLoadingFull(false);
        alert(error.message);
      });
  };

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText1}>Whoopsie!</Text>
      <Text style={styles.emptyText2}>
        It looks live you haven't created any to do list yet. Let's begin by
        clicking the plus button below!
      </Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', {type: 'add'})}>
        <View style={styles.buttonCircle}>
          <Text style={styles.titleText2}>+</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  const renderRow = ({ item }) => (
    <View style={styles.cardItem}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableWithoutFeedback onPress={() => {
          if (!item.isDone) {
            Alert.alert(
              'Finish Task',
              'Are you sure you want to finish selected task?',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {text: 'Ok', onPress: () => finishedTask()},
              ]
            );
          }
        }}>
          <View
            style={
              item.status === 1
                ? styles.doneStatusContainer
                : styles.notDoneStatusContainer
            }
          >
            <Ionicons
              name={'ios-checkmark'}
              size={25}
              color={Color.SECONDARY_COLOR}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{ flex: 8, paddingLeft: 10 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ marginRight: 7 }}>
            <Text style={styles.titleText3}>{item.title}</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            {item.priority === 'high' ? (
              <Ionicons
                name={'md-arrow-dropup-circle'}
                size={16}
                color={'red'}
              />
            ) : (
              <Ionicons
                name={'md-arrow-dropdown-circle'}
                size={16}
                color={Color.GREENY_BLUE}
              />
            )}
          </View>
        </View>
        
        <View>
          <Text style={styles.descText}>{item.note}</Text>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', {item, type: 'edit'})}>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Ionicons name={'ios-create'} size={20} color={Color.PRIMARY_COLOR} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  const renderData = () => {
    return (
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', {type: 'add'})}>
          <View style={styles.buttonCircleAbsolute}>
            <Text style={styles.titleText2}>+</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder={"Search to do activity"}
            onChangeText={text => setQ(text)}
            value={q}
            style={styles.search}
          />
          <Ionicons
            name={'ios-search'}
            size={30}
            color={Color.GREENY_BLUE}
            style={styles.searchIcon}
          />
        </View>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <View style={styles.tabContainer}>
            <TouchableWithoutFeedback
              style={{ flex: 1 }}
              onPress={() => setActiveTab(0)}
            >
              <View
                style={activeTab === 0 ? styles.tabActive : styles.tabInactive}
              >
                <Text
                  style={
                    activeTab === 0
                      ? styles.tabFontActive
                      : styles.tabFontInactive
                  }
                >
                  All
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              style={{ flex: 1 }}
              onPress={() => setActiveTab(1)}
            >
              <View
                style={activeTab === 1 ? styles.tabActive : styles.tabInactive}
              >
                <Text
                  style={
                    activeTab === 1
                      ? styles.tabFontActive
                      : styles.tabFontInactive
                  }
                >
                  Done
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              style={{ flex: 1 }}
              onPress={() => setActiveTab(2)}
            >
              <View
                style={activeTab === 2 ? styles.tabActive : styles.tabInactive}
              >
                <Text
                  style={
                    activeTab === 2
                      ? styles.tabFontActive
                      : styles.tabFontInactive
                  }
                >
                  Not Done
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderRow}
          />
        </View>
      </View>
    );
  };

  const logout = () => {
    AsyncStorage.removeItem('authToken');
    navigation.replace('Login');
  }

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} color={Color.PRIMARY_COLOR} />
      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <Loader modalVisible={isLoadingFull} />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Color.PRIMARY_COLOR, Color.SECONDARY_COLOR]}
        style={styles.headerContainer}
      >
        <View style={{alignItems: 'flex-end'}}>
          <TouchableWithoutFeedback onPress={() => Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {text: 'Ok', onPress: () => logout()},
            ]
          )}>
            <Ionicons name={'ios-exit'} size={30} color={Color.PRIMARY_COLOR} />
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.titleText1}>Hi, How are you,</Text>
        <Text style={styles.titleText2}>Fullname ?</Text>
      </LinearGradient>
      { data.length > 0 ? renderData() : renderEmptyState()}
    </View>
  );
}
