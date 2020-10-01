/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../color';
import {Appbtn, AppField, Navheader, Searchbox} from '../../components';
import {Icon} from 'react-native-elements';
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';
export class Hiredashboard extends Component {
  state = {
    modalVisible: false,
    data: [
      {id: 1, name: 'umer', shield: true},
      {id: 2, name: 'umer2', shield: false},
      {id: 3, name: 'umer2', shield: false},
      {id: 4, name: 'umer2', shield: true},
      {id: 5, name: 'umer2', shield: true},
      {id: 6, name: 'umer2', shield: true},
      {id: 7, name: 'umer2', shield: true},
      {id: 8, name: 'umer2', shield: true},
      {id: 9, name: 'umer2', shield: true},
      {id: 99, name: 'umer2', shield: true},
      {id: 11, name: 'umer2', shield: true},
    ],
    focused: true,
  };

  renderItem = (item, index) => (
    <View style={styles.flatlistCoaniner}>
      <View style={styles.left}></View>
      <View style={styles.middle}>
        <Text style={styles.work}>Plumber</Text>
        <Text style={styles.discriptin}>
          Work depend upon the user what he want to do
        </Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          delayPressIn={0}
          onPress={() => {
            this.setState({item: {...item, shield: !item.shield}});
          }}>
          {item.shield ? (
            <>
              <Icon
                name={'shield-checkmark'}
                type="ionicon"
                color={red}
                size={30}
              />
              <Text style={styles.verified}>Verified</Text>
            </>
          ) : (
            <Icon
              name={'shield-outline'}
              type="ionicon"
              color={red}
              size={30}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
  render() {
    return (
      <View style={styles.MainContianer}>
        <View style={styles.topContainer}>
          <View style={styles.searchbox}>
            <Text style={styles.title}>JOBS</Text>
          </View>
          <Searchbox />
        </View>
        <View style={styles.middleContainer}>
          <View>
            <AnimatedFlatList
              data={this.state.data}
              renderItem={({item}) => this.renderItem(item)}
              animationType={AnimationType.Fade}
              animationDuration={1000}
              focused={this.state.focused}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}></View>
        {/* modal */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContianer: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  topContainer: {
    // backgroundColor: 'gold',
    width: '100%',
    height: h('16%'),
    alignItems: 'center',
  },
  middleContainer: {
    // backgroundColor: 'dodgerblue',
    width: '100%',
    height: h('73%'),
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
  flatlistCoaniner: {
    // backgroundColor: 'gold',
    width: w('90%'),
    height: h('20%'),
    marginTop: h('2%'),
    borderRadius: h('1%'),
    borderWidth: h('0.2%'),
    borderColor: red,
    flexDirection: 'row',
  },
  left: {
    // backgroundColor: 'red',
    width: '35%',
    height: h('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    // backgroundColor: 'yellow',
    width: '50%',
    height: h('20%'),
    justifyContent: 'center',
  },
  right: {
    // backgroundColor: 'green',
    width: '15%',
    height: h('20%'),
    paddingTop: h('2%'),
    alignItems: 'center',
  },
  work: {
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    color: Black,
  },
  discriptin: {
    fontSize: h('2%'),
    color: '#0008',
  },
  verified: {
    color: red,
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
});
