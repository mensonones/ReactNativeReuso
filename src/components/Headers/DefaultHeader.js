import React from 'react';
import {TouchableOpacity} from 'react-native';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

function defaultHeader({navigation}) {
  function backScreen() {
    return navigation.goBack(null);
  }
  return {
    headerStyle: {
      backgroundColor: '#fff',
      elevation: 0,
    },
    headerTintColor: '#841b2d',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
    },

    headerLeft: (
      <TouchableOpacity style={{marginLeft: 10}} onPress={backScreen}>
        <IconAnt name="arrowleft" size={20} color={'#841b2d'} />
      </TouchableOpacity>
    ),
  };
}

export default defaultHeader;
