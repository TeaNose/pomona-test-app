import React, { useState } from "react";
import { View, Image, Text, TextInput } from "react-native";

import Button from "../../components/button";

import styles from "./styles";
import Color from "../../themes/Color";
import { ScrollView } from "react-native-gesture-handler";

export default function Login(props) {
  const { navigation } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("login");

  const renderLogin = () => (
    <View style={styles.cardContainer}>
      <TextInput
        placeholder={"Email"}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder={"Password"}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button
        isPrimary
        title={'Login'}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );

  const renderRegister = () => (
    <View style={styles.cardContainer}>
      <TextInput
        placeholder={"Name"}
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        placeholder={"Email"}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder={"Password"}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        placeholder={"Confirm Password"}
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <Button isPrimary title={"Register"} buttonStyle={styles.button} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Image
            source={{
              uri:
                "https://media.licdn.com/dms/image/C560BAQG-iPj3Yh3z7w/company-logo_200_200/0?e=2159024400&v=beta&t=WP1asdo0ZPImNAF0ZPmbGtzD0p3qD_cR7F-GRaXvPtM"
            }}
            style={{ height: 100, width: 100 }}
          />

          <View style={styles.titleContainer}>
            <View
              style={[
                styles.titleFontContainer,
                {
                  borderBottomWidth: type === "login" ? 2 : 0,
                  borderBottomColor: Color.PRIMARY_COLOR
                }
              ]}
            >
              <Text
                style={[
                  styles.titleFont,
                  {
                    color:
                      type === "login"
                        ? Color.PRIMARY_COLOR
                        : Color.VERY_LIGHT_PINK
                  }
                ]}
                onPress={() => setType("login")}
              >
                Login
              </Text>
            </View>
            <View
              style={[
                styles.titleFontContainer,
                {
                  borderBottomWidth: type === "register" ? 2 : 0,
                  borderBottomColor: Color.PRIMARY_COLOR
                }
              ]}
            >
              <Text
                style={[
                  styles.titleFont,
                  {
                    color:
                      type === "register"
                        ? Color.PRIMARY_COLOR
                        : Color.VERY_LIGHT_PINK
                  }
                ]}
                onPress={() => setType("register")}
              >
                Register
              </Text>
            </View>
          </View>

          {type === "login" ? renderLogin() : renderRegister()}
        </View>
      </ScrollView>
    </View>
  );
}
