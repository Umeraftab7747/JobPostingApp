/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../color';
import {Appbtn, AppField, Navheader, AppTextField} from '../../components';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

export class Addjob extends Component {
  state = {
    modalVisible: false,
    check: '',
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.MainContianer}>
          <View style={styles.topContainer}>
            <View style={styles.searchbox}>
              <Text style={styles.title}>Add Job</Text>
            </View>
          </View>
          <View style={styles.middleContainer}>
            <AppField placeholder={'Job Title'} name={'briefcase'} />
            <AppField placeholder={'Work Address'} name={'business'} />
            <AppField placeholder={'Email'} name={'mail'} />
            <AppTextField placeholder={'Discription'} name={'clipboard'} />
            <View style={styles.urgnet}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({check: 'urgent'});
                }}
                style={styles.urgentbox}>
                {this.state.check === 'urgent' ? (
                  <Icon
                    name={'checkmark'}
                    type="ionicon"
                    color={white}
                    size={20}
                  />
                ) : null}
                <Text style={styles.urgnttxt}>Urgent</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({check: 'noturgent'});
                }}
                style={styles.urgentbox}>
                {this.state.check === 'noturgent' ? (
                  <Icon
                    name={'checkmark'}
                    type="ionicon"
                    color={white}
                    size={20}
                  />
                ) : null}
                <Text style={styles.urgnttxt}>not-Urgent</Text>
              </TouchableOpacity>
            </View>
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
    height: h('9%'),
  },
  middleContainer: {
    // backgroundColor: 'dodgerblue',
    width: '100%',
    height: h('70%'),
    alignItems: 'center',
    justifyContent: 'center',
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
  urgnet: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    height: h('6%'),
    // backgroundColor: 'gold',
    alignItems: 'center',
  },
  urgentbox: {
    backgroundColor: red,
    width: '40%',
    height: h('6%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: h('1%'),
    flexDirection: 'row',
  },
  urgnttxt: {
    color: white,
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
});
