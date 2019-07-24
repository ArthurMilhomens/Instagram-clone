import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

function New(props){
    return(
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignedOut')}>
          <Text>New</Text>
        </TouchableOpacity>
      </View>
    );
}
export default New;