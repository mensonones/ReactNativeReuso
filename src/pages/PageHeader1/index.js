import React from 'react';

import {Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const PageHeader1 = () => (
  <ImageBackground
    source={{
      uri: 'https://images.unsplash.com/photo-1495060748580-546c1976af76',
    }}
    style={styles.container}
    resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#841b2d" />
    <Text style={styles.title}>Page 1</Text>
  </ImageBackground>
);

export default PageHeader1;
