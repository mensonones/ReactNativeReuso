import React from 'react';

import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = props => (
  <ImageBackground
    source={{
      uri: 'https://images.unsplash.com/photo-1495060748580-546c1976af76',
    }}
    style={styles.container}
    resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#841b2d" />
    <Text style={styles.welcome}>Header Reused</Text>
    <Button
      title="Page1"
      color={'#841b2d'}
      onPress={() => props.navigation.navigate('Page1')}
    />
    <Button
      title="Page2"
      color={'#841b2d'}
      onPress={() => props.navigation.navigate('Page2')}
    />
    <Button
      title="Page3"
      color={'#841b2d'}
      onPress={() => props.navigation.navigate('Page3')}
    />
  </ImageBackground>
);

export default Main;
