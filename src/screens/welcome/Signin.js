/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../color';
import {Appbtn, AppField} from '../../components';

export class Signin extends Component {
  render() {
    return (
      <View style={styles.MainContianer}>
        <View style={styles.topContainer}>
          <Text style={styles.header}>LOGIN</Text>
        </View>
        <View style={styles.middleContainer}>
          <AppField placeholder={'Email'} name={'person-outline'} />
          <AppField
            placeholder={'Password'}
            secureTextEntry={true}
            name={'key-outline'}
          />
          <TouchableOpacity delayPressIn={0} style={styles.forgotpass}>
            <Text style={styles.txtpass}>Forgot passowrd!</Text>
          </TouchableOpacity>

          <Appbtn title={'SignIn'} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.newaccount}>
            <View style={styles.notuser}>
              <Text style={styles.usertxt}>Not a User!</Text>
            </View>
            <TouchableOpacity delayPressIn={0} style={styles.notuser2}>
              <Text style={styles.signuptxt}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    width: w('40%'),
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
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
    width: '39%',
  },
});
