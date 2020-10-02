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

export class ProfileDiscription extends Component {
  state = {
    modalVisible: false,
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.MainContianer}>
          <View style={styles.topContainer}>
            <Navheader
              onPress={() => {
                this.props.navigation.goBack();
              }}
              txt={'Edit Info'}
            />
          </View>
          <View style={styles.middleContainer}>
            <AppField placeholder={'Education'} name={'school'} />
            <AppField placeholder={'Field Category'} name={'ribbon'} />
            <AppField placeholder={'Year of Experience'} name={'time'} />
          </View>
          <View style={styles.bottomContainer}>
            <Appbtn title={'Submit'} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  bgcontainer: {
    flex: 1,
  },
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
  header: {
    color: Black,
    fontSize: h('4%'),
    fontWeight: 'bold',
  },
  forgotpass: {
    // backgroundColor: red,
    width: '70%',
    height: '10%',
    justifyContent: 'center',
  },
  txtpass: {
    color: red,
    fontWeight: 'bold',
    fontSize: h('2.3%'),
  },
  newaccount: {
    // backgroundColor: red,
    width: w('55%'),
    flexDirection: 'row',
    justifyContent: 'center',
    height: h('5%'),
  },
  notuser: {
    // backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  usertxt: {
    fontSize: h('2%'),
  },
  signuptxt: {
    fontWeight: 'bold',
    fontSize: h('2.4%'),
    color: red,
  },
  notuser2: {
    // backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
});
