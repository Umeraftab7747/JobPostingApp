/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../color';
import {Appbtn, AppField, Navheader, Searchbox} from '../../components';
import {Icon} from 'react-native-elements';
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

export class Profile extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>HELLOW PROFILE HERE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
