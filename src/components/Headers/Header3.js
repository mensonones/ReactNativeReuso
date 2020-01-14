import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

import defaultHeader from './DefaultHeader';

function Header3(props) {
  return {
    ...defaultHeader(props),
    headerTitle: (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://i.imgur.com/BYN8BBA.png'}}
          style={styles.userImage}
        />
        <Text style={styles.textTitle}>{`User`}</Text>
      </View>
    ),
    headerRight: (
      <>
        <TouchableOpacity>
          <IconAnt name="ellipsis1" size={27} color={'#841b2d'} />
        </TouchableOpacity>
      </>
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
    left: 5,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#841b2d',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 400 / 2,
  },
});

export default Header3;
