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
    email: false,
    info: false,
    about: false,
  };
  render() {
    return (
      <View style={styles.MainContianer}>
        <View style={styles.topContainer}>
          <View style={styles.searchbox}>
            <Text style={styles.title}>Settings</Text>
          </View>
        </View>
        <View style={styles.middleContainer}>
          {/* start Container1 */}
          <View style={styles.SettingContainer}>
            <View style={styles.srightContainer}>
              <Icon
                name={'mail-outline'}
                type="ionicon"
                color={red}
                size={30}
              />
            </View>
            <View style={styles.sMiddleContainer}>
              <Text style={styles.emailtxt}>EMAIL</Text>
            </View>
            <View style={styles.sleftContainer}>
              <TouchableOpacity
                delayPressIn={0}
                onPress={() => {
                  this.setState({email: !this.state.email});
                }}>
                {this.state.email ? (
                  <Icon
                    name={'ellipse-sharp'}
                    type="ionicon"
                    color={red}
                    size={30}
                  />
                ) : (
                  <Icon
                    name={'ellipse-outline'}
                    type="ionicon"
                    color={red}
                    size={30}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* start container 2 */}

          {/* start Container1 */}
          <View style={styles.SettingContainer}>
            <View style={styles.srightContainer}>
              <Icon name={'alert-sharp'} type="ionicon" color={red} size={30} />
            </View>
            <View style={styles.sMiddleContainer}>
              <Text style={styles.emailtxt}>SHARE INFO</Text>
            </View>
            <View style={styles.sleftContainer}>
              <TouchableOpacity
                delayPressIn={0}
                onPress={() => {
                  this.setState({info: !this.state.info});
                }}>
                {this.state.info ? (
                  <Icon
                    name={'ellipse-sharp'}
                    type="ionicon"
                    color={red}
                    size={30}
                  />
                ) : (
                  <Icon
                    name={'ellipse-outline'}
                    type="ionicon"
                    color={red}
                    size={30}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* start container 2 */}
          {/* start Container1 */}
          <View style={styles.SettingContainer}>
            <View style={styles.srightContainer}>
              <Icon
                name={'information-circle-outline'}
                type="ionicon"
                color={red}
                size={30}
              />
            </View>
            <View style={styles.sMiddleContainer}>
              <Text style={styles.emailtxt}>ABOUT US</Text>
            </View>
            <View style={styles.sleftContainer}>
              <TouchableOpacity
                delayPressIn={0}
                onPress={() => {
                  this.setState({about: !this.state.about});
                }}>
                {this.state.about ? (
                  <Icon
                    name={'ellipse-sharp'}
                    type="ionicon"
                    color={red}
                    size={30}
                  />
                ) : (
                  <Icon
                    name={'ellipse-outline'}
                    type="ionicon"
                    color={red}
                    size={30}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* start container 2 */}
          {/* start Container1 */}
          <TouchableOpacity
            delayPressIn={0}
            onPress={() => {
              this.props.navigation.replace('Chose');
            }}
            style={styles.SettingContainer}>
            <View style={styles.srightContainer}>
              <Icon
                name={'rocket-outline'}
                type="ionicon"
                color={red}
                size={30}
              />
            </View>
            <View style={styles.sMiddleContainer}>
              <Text style={styles.emailtxt}>SWITCH PROFILE</Text>
            </View>
            <View style={styles.sleftContainer}></View>
          </TouchableOpacity>

          {/* start container 2 */}
          {/* start Container1 */}
          <TouchableOpacity
            delayPressIn={0}
            onPress={() => {
              this.props.navigation.replace('WelcomeScreen');
            }}
            style={styles.SettingContainer}>
            <View style={styles.srightContainer}>
              <Icon
                name={'exit-outline'}
                type="ionicon"
                color={red}
                size={30}
              />
            </View>
            <View style={styles.sMiddleContainer}>
              <Text style={styles.emailtxt}>LOGOUT</Text>
            </View>
            <View style={styles.sleftContainer}></View>
          </TouchableOpacity>

          {/* start container 2 */}
        </View>
        <View style={styles.bottomContainer}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContianer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  topContainer: {
    // backgroundColor: 'gold',
    width: '100%',
    height: h('9%'),
  },
  middleContainer: {
    // backgroundColor: 'dodgerblue',
    width: '100%',
    height: h('80%'),
    paddingTop: h('5%'),
  },
  bottomContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('10%'),
    alignItems: 'center',
  },
  searchbox: {
    backgroundColor: red,
    width: '100%',
    height: h('8%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: white,
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  SettingContainer: {
    width: '100%',
    height: h('8%'),
    // backgroundColor: red,
    // borderWidth: 1,
    flexDirection: 'row',
    borderWidth: h('0.1%'),
    borderColor: red,
  },
  srightContainer: {
    // backgroundColor: red,
    width: '15%',
    height: h('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sMiddleContainer: {
    // backgroundColor: 'gold',
    width: '70%',
    height: h('8%'),
    justifyContent: 'center',
    paddingLeft: h('1%'),
  },
  sleftContainer: {
    // backgroundColor: 'green',
    width: '15%',
    height: h('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailtxt: {
    color: red,
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
});
