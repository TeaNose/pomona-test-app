import React, { useState, useContext, useEffect } from 'react';
import { View, Image, Text, TextInput, ScrollView, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from '../../components/button';
import Loader from '../../components/loader';

import styles from './styles';
import Color from '../../themes/Color';

import { UserContext } from '../../context/user';

import { callLoginApi, callRegisterApi } from '../../services';

export default function Login(props) {
	const { navigation } = props;

	const userContext = useContext(UserContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [name, setName] = useState('');
	const [type, setType] = useState('login');
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadToken, setIsLoadToken] = useState(true);
	const [isPasswordSecure, setIsPasswordSecure] = useState(true);
	const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);

	const checkAuthToken = async () => {
		const authToken = await AsyncStorage.getItem('authToken');
		if (authToken) {
			userContext.changeAuthToken(authToken);
			navigation.replace('Home');
		}
		setIsLoadToken(false);
	};

	useEffect(() => {
		checkAuthToken();
	}, []);

	const submitLogin = () => {
		if (email === '' || !email || password === '' || !password) {
			alert('Semua field harus diisi');
		} else {
			setIsLoading(true);

			const params = {
				email,
				password,
			};

			callLoginApi(params)
				.then(async response => {
					await AsyncStorage.setItem('authToken', response.data.token);
					userContext.changeAuthToken(response.data.token);
					setIsLoading(false);

					const resetAction = StackActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});
					navigation.dispatch(resetAction);
				})
				.catch(error => {
					setIsLoading(false);
					alert(error.message);
				});
		}
	};

	const submitRegister = () => {
		if (email === '' || !email || password === '' || !password || name === '' || !name || confirmPassword === '' || !confirmPassword) {
			alert('Semua field harus diisi');
		} else if (password !== confirmPassword) {
			alert('Password tidak sama');
		} else {
			setIsLoading(true);

			const params = {
				name,
				email,
				password,
			};

			callRegisterApi(params)
				.then(async response => {
					await AsyncStorage.setItem('authToken', response.data.token);
					userContext.changeAuthToken(response.data.token);
					setIsLoading(false);

					const resetAction = StackActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});
					navigation.dispatch(resetAction);
				})
				.catch(error => {
					setIsLoading(false);
					alert(error.message);
				});
		}
	};

	const resetParams = () => {
		setName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	};

	const renderLogin = () => (
		<View style={styles.cardContainer}>
			<TextInput
				placeholder={'Email'}
				onChangeText={text => setEmail(text)}
				value={email}
				autoCapitalize={'none'}
				onSubmitEditing={() => {
					this.passwordTextInput.focus();
				}}
				keyboardType={'email-address'}
			/>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ flex: 9 }}>
					<TextInput
						placeholder={'Password'}
						onChangeText={text => setPassword(text)}
						value={password}
						secureTextEntry={isPasswordSecure}
						autoCapitalize={'none'}
						ref={input => {
							this.passwordTextInput = input;
						}}
						onSubmitEditing={submitLogin}
					/>
				</View>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<TouchableWithoutFeedback onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
						<Ionicons name={isPasswordSecure ? 'ios-eye-off' : 'ios-eye'} size={25} color={isPasswordSecure ? Color.SILVER : Color.PRIMARY_COLOR} />
					</TouchableWithoutFeedback>
				</View>
			</View>

			<Button isPrimary title={'Login'} buttonStyle={styles.button} onPress={submitLogin} />
		</View>
	);

	const renderRegister = () => (
		<View style={styles.cardContainer}>
			<TextInput
				placeholder={'Name'}
				onChangeText={text => setName(text)}
				value={name}
				autoCapitalize={'words'}
				onSubmitEditing={() => {
					this.emailTextInput.focus();
				}}
			/>
			<TextInput
				placeholder={'Email'}
				onChangeText={text => setEmail(text)}
				value={email}
				autoCapitalize={'none'}
				keyboardType={'email-address'}
				ref={input => {
					this.emailTextInput = input;
				}}
				onSubmitEditing={() => {
					this.passwordTextInput.focus();
				}}
			/>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ flex: 9 }}>
					<TextInput
						placeholder={'Password'}
						onChangeText={text => setPassword(text)}
						value={password}
						secureTextEntry={isPasswordSecure}
						autoCapitalize={'none'}
						ref={input => {
							this.passwordTextInput = input;
						}}
						onSubmitEditing={() => {
							this.confirmPasswordTextInput.focus();
						}}
					/>
				</View>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<TouchableWithoutFeedback onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
						<Ionicons name={isPasswordSecure ? 'ios-eye-off' : 'ios-eye'} size={25} color={isPasswordSecure ? Color.SILVER : Color.PRIMARY_COLOR} />
					</TouchableWithoutFeedback>
				</View>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ flex: 9 }}>
					<TextInput
						placeholder={'Confirm Password'}
						onChangeText={text => setConfirmPassword(text)}
						value={confirmPassword}
						secureTextEntry={isConfirmPasswordSecure}
						autoCapitalize={'none'}
						ref={input => {
							this.confirmPasswordTextInput = input;
						}}
						onSubmitEditing={submitRegister}
					/>
				</View>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<TouchableWithoutFeedback onPress={() => setIsConfirmPasswordSecure(!isConfirmPasswordSecure)}>
						<Ionicons name={isConfirmPasswordSecure ? 'ios-eye-off' : 'ios-eye'} size={25} color={isConfirmPasswordSecure ? Color.SILVER : Color.PRIMARY_COLOR} />
					</TouchableWithoutFeedback>
				</View>
			</View>
			<Button isPrimary title={'Register'} buttonStyle={styles.button} />
		</View>
	);

	return (
		<View style={{ flex: 1 }}>
			<Loader modalVisible={isLoading} />
			<ScrollView>
				<View style={styles.mainContainer}>
					<Image
						source={{
							uri: 'https://media.licdn.com/dms/image/C560BAQG-iPj3Yh3z7w/company-logo_200_200/0?e=2159024400&v=beta&t=WP1asdo0ZPImNAF0ZPmbGtzD0p3qD_cR7F-GRaXvPtM',
						}}
						style={{ height: 100, width: 100 }}
					/>

					{isLoadToken ? (
						<View style={{ flex: 1, marginTop: 100, alignItems: 'center' }}>
							<ActivityIndicator size={'small'} color={Color.PRIMARY_COLOR} />
						</View>
					) : (
						<View>
							<View style={styles.titleContainer}>
								<View
									style={[
										styles.titleFontContainer,
										{
											borderBottomWidth: type === 'login' ? 2 : 0,
											borderBottomColor: Color.PRIMARY_COLOR,
										},
									]}
								>
									<Text
										style={[
											styles.titleFont,
											{
												color: type === 'login' ? Color.PRIMARY_COLOR : Color.SILVER,
											},
										]}
										onPress={() => {
											resetParams();
											setType('login');
										}}
									>
										Login
									</Text>
								</View>
								<View
									style={[
										styles.titleFontContainer,
										{
											borderBottomWidth: type === 'register' ? 2 : 0,
											borderBottomColor: Color.PRIMARY_COLOR,
										},
									]}
								>
									<Text
										style={[
											styles.titleFont,
											{
												color: type === 'register' ? Color.PRIMARY_COLOR : Color.SILVER,
											},
										]}
										onPress={() => {
											resetParams();
											setType('register');
										}}
									>
										Register
									</Text>
								</View>
							</View>

							{type === 'login' ? renderLogin() : renderRegister()}
						</View>
					)}
				</View>
			</ScrollView>
		</View>
	);
}
