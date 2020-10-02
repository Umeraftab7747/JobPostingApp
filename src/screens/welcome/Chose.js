/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../color';
import {Appbtn, AppField} from '../../components';

export class Chose extends Component {
  render() {
    return (
      <View style={styles.MainContianer}>
        <View style={styles.topContainer}>
          <Text style={styles.header}>CHOSE AN OPTION</Text>
        </View>
        <View style={styles.middleContainer}>
          <TouchableOpacity
            delayPressIn={0}
            onPress={() => {
              this.props.navigation.replace('BottomtabHire');
            }}
            style={styles.btnContainer}>
            <Text style={styles.txtbtn}>HIRE A PERSON</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.replace('BottomTab');
            }}
            delayPressIn={0}
            style={styles.btnContainer}>
            <Text style={styles.txtbtn}>GET JOB</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bgcontainer: {
    flex: 1,
  },
  MainContianer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  topContainer: {
    // backgroundColor: 'gold',
    width: '100%',
    height: h('20%'),
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  },
  header: {
    color: red,
    fontSize: h('4%'),
    fontWeight: 'bold',
  },
  btnContainer: {
    backgroundColor: red,
    width: '60%',
    height: h('20%'),
    borderWidth: h('0.3%'),
    borderColor: red,
    marginTop: h('2%'),
    borderRadius: h('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtbtn: {
    color: white,
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
});
