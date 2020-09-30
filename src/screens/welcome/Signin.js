/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../color';
import {Appbtn, AppField} from '../../components';

export class Signin extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.bgcontainer}
        source={require('../../assets/bg2.jpg')}>
        <View style={styles.MainContianer}>
          <View style={styles.topContainer}>
            <Text style={styles.header}>Welcome To Job Post</Text>
          </View>
          <View style={styles.middleContainer}>
            <Appbtn title={'SignIn'} />
            <Appbtn title={'SignUp'} />
          </View>
          <View style={styles.bottomContainer}></View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  bgcontainer: {
    flex: 1,
  },
  MainContianer: {
    backgroundColor: 'rgba(249, 249, 249, 0.6)',
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
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('20%'),
  },
  header: {
    color: Black,
    fontSize: h('4%'),
    fontWeight: 'bold',
  },
});
