/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../screens/color';
import {Icon} from 'react-native-elements';

export class Searchbox extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <TextInput
          placeholder={'Search'}
          placeholderTextColor={Black}
          style={styles.TextInput}
        />
        <TouchableOpacity style={styles.icon}>
          <Icon
            name={'search-outline'}
            type="ionicon"
            color={white}
            size={20}
          />
        </TouchableOpacity>
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
    backgroundColor: '#e2e2e2',
    width: w('60%'),
    height: h('6%'),
    color: Black,
    paddingLeft: h('1%'),
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: w('10%'),
    height: h('6%'),
  },
});
