/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../color';
import {Appbtn, AppField, Navheader} from '../../components';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

export class Hiredashboard extends Component {
  state = {
    modalVisible: false,
  };
  render() {
    return (
      <View style={styles.MainContianer}>
        <View style={styles.topContainer}></View>
        <View style={styles.middleContainer}></View>
        <View style={styles.bottomContainer}></View>
        {/* modal */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContianer: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  topContainer: {
    // backgroundColor: 'gold',
    width: '100%',
    height: h('10%'),
  },
  middleContainer: {
    // backgroundColor: 'dodgerblue',
    width: '100%',
    height: h('80%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('10%'),
    alignItems: 'center',
  },
});
