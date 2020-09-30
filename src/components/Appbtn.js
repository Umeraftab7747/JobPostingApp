/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../screens/color';

export class Appbtn extends Component {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        delayPressIn={0}
        style={styles.BtnContainer}>
        <Text style={styles.txt}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  BtnContainer: {
    width: w('35%'),
    height: h('6.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: red,
    borderRadius: h('1%'),
    marginTop: h('1%'),
  },
  txt: {
    color: white,
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
});
