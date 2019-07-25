import React, { useState } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import Color from '../../themes/Color';
import { TextInput } from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    title: 'To Do 1',
    notes: 'Test',
    priority: 'high',
    status: 1
  },
  {
    id: 2,
    title: 'To Do 1',
    notes: 'Test',
    priority: 'high',
    status: 0
  },
  {
    id: 3,
    title: 'To Do 1',
    notes: 'Test',
    priority: 'low',
    status: 1
  },
  {
    id: 4,
    title: 'To Do 1',
    notes: 'Test',
    priority: 'low',
    status: 0
  }
];

export default function Home(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [q, setQ] = useState('');

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText1}>Whoopsie!</Text>
      <Text style={styles.emptyText2}>
        It looks live you haven't created any to do list yet. Let's begin by
        clicking the plus button below!
      </Text>
      <View style={styles.buttonCircle}>
        <Text style={styles.titleText2}>+</Text>
      </View>
    </View>
  );

  const renderRow = ({ item }) => (
    <View style={styles.cardItem}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
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
          <Text style={styles.descText}>{item.notes}</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Ionicons name={'ios-create'} size={20} color={Color.PRIMARY_COLOR} />
      </View>
    </View>
  );

  const renderData = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.buttonCircleAbsolute}>
          <Text style={styles.titleText2}>+</Text>
        </View>
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

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Color.PRIMARY_COLOR, Color.SECONDARY_COLOR]}
        style={styles.headerContainer}
      >
        <Text style={styles.titleText1}>Hi, How are you,</Text>
        <Text style={styles.titleText2}>Fullname ?</Text>
      </LinearGradient>
      {renderData()}
    </View>
  );
}
