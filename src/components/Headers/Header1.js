import React from 'react';
import {TouchableOpacity} from 'react-native';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

import defaultHeader from './DefaultHeader';

function Header1(props) {
  function backScreen() {
    return props.navigation.goBack(null);
  }
  return {
    ...defaultHeader(props),
    title: 'Header 1',
    headerRight: (
      <TouchableOpacity onPress={backScreen}>
        <IconAnt name="close" size={27} color={'#841b2d'} />
      </TouchableOpacity>
    ),
  };
}

export default Header1;
