/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../color';
import {Appbtn, AppField} from '../../components';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

export class Signin extends Component {
  state = {
    modalVisible: false,
  };
  render() {
    return (
      <KeyboardAwareScrollView>
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
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: true});
              }}
              delayPressIn={0}
              style={styles.forgotpass}>
              <Text style={styles.txtpass}>Forgot passowrd!</Text>
            </TouchableOpacity>

            <Appbtn
              onPress={() => {
                this.props.navigation.replace('Chose');
              }}
              title={'SignIn'}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.newaccount}>
              <View style={styles.notuser}>
                <Text style={styles.usertxt}>Not a User!</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Signup');
                }}
                delayPressIn={0}
                style={styles.notuser2}>
                <Text style={styles.signuptxt}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* modal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({modalVisible: false});
            }}>
            <View style={styles.modalcontainer}>
              <View style={styles.ModalViewcontainer}>
                <View style={styles.leftContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({modalVisible: false});
                    }}
                    style={styles.iconmargin}>
                    <Icon
                      name={'close-circle-outline'}
                      type="ionicon"
                      color={white}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
                <AppField placeholder={'Rest Email'} name={'mail-outline'} />
                <Appbtn title={'Rest'} />
              </View>
            </View>
          </Modal>
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
  modalcontainer: {
    backgroundColor: '#fff9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalViewcontainer: {
    backgroundColor: '#e2e2e2',
    width: '90%',
    height: h('25%'),
    borderRadius: h('2%'),
    alignItems: 'center',
    // justifyContent: 'center',
  },
  leftContainer: {
    // backgroundColor: white,
    width: '100%',
    height: h('7%'),
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: h('1%'),
  },
  iconmargin: {
    marginLeft: h('1%'),
  },
});
