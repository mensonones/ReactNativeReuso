import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

import defaultHeader from './DefaultHeader';

function Header2(props) {
  function backScreen() {
    return props.navigation.goBack(null);
  }
  return {
    ...defaultHeader(props),
    headerTitle: (
      <View style={styles.container}>
        <Text style={styles.textTitle}>{`Header 2`}</Text>
      </View>
    ),
    headerRight: (
      <TouchableOpacity onPress={backScreen}>
        <IconAnt name="close" size={27} color={'#841b2d'} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#841b2d',
  },
});

export default Header2;
