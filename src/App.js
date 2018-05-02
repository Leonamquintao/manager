import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';

//reducers
import reducers from './reducers';

export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD4brOSqQkhLHnsk5knWTlxhEDuvDUrnsg',
      authDomain: 'manager-react-native-55.firebaseapp.com',
      databaseURL: 'https://manager-react-native-55.firebaseio.com',
      projectId: 'manager-react-native-55',
      storageBucket: 'manager-react-native-55.appspot.com',
      messagingSenderId: '8608680018'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
