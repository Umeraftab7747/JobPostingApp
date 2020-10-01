/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../screens/color';
import {Icon} from 'react-native-elements';

export class Navheader extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity style={styles.icon}>
          <Icon
            name={'chevron-back-outline'}
            type="ionicon"
            color={white}
            size={30}
          />
        </TouchableOpacity>
        <View style={styles.txtContinaer}>
          <Text style={styles.txt}>{this.props.txt}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: red,
    width: w('100%'),
    height: h('7%'),
    flexDirection: 'row',
  },
  TextInput: {
    backgroundColor: white,
    width: w('75%'),
    height: h('6%'),
    color: red,
    paddingLeft: h('1%'),
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: w('15%'),
    height: h('6%'),
  },
  txtContinaer: {
    // backgroundColor: Black,
    width: w('70%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: white,
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
});
