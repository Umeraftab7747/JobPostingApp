/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../screens/color';
import {Icon} from 'react-native-elements';

export class AppTextField extends Component {
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
          secureTextEntry={this.props.secureTextEntry}
          multiline={true}
          numberOfLines={5}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: red,
    width: w('85%'),
    height: h('20%'),
    margin: h('1%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    backgroundColor: white,
    width: w('75%'),
    height: h('20%'),
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
