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

export class Settings extends Component {
  state = {
    modalVisible: false,
  };
  render() {
    return (
      <View style={styles.MainContianer}>
        <View style={styles.topContainer}></View>
        <View style={styles.middleContainer}></View>
        <View style={styles.bottomContainer}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContianer: {
    backgroundColor: '#e2e2e2',
    flex: 1,
  },
  topContainer: {
    // backgroundColor: 'gold',
    width: '100%',
    height: h('20%'),
  },
  middleContainer: {
    // backgroundColor: 'dodgerblue',
    width: '100%',
    height: h('60%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('20%'),
    alignItems: 'center',
  },
});
