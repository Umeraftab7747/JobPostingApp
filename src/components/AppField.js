/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../screens/color';
import {Icon} from 'react-native-elements';

export class AppField extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.icon}>
          <Icon name={this.props.name} type="ionicon" color={white} size={20} />
        </View>
        <TextInput
          placeholder={this.props.placeholder}
          placeholderTextColor={red}
          style={styles.TextInput}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: red,
    width: w('70%'),
    height: h('6%'),
    margin: h('1%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    backgroundColor: white,
    width: w('60%'),
    height: h('6%'),
    color: red,
    paddingLeft: h('1%'),
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: w('10%'),
    height: h('6%'),
  },
});
