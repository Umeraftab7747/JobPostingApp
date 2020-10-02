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

export class BookmarkedCandidate extends Component {
  state = {
    modalVisible: false,
    data: [
      {
        id: 1,
        work: 'Umer Aftab',

        education: 'Ms.Computer Science',
        skill: 'Reac native',
      },
      {
        id: 2,
        work: 'Kashif',
        shield: false,
        urgent: false,
        education: 'Matric',
        skill: 'Plumber',
      },
    ],
    focused: true,
  };

  renderItem = (item, index) => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('CanditateProfile');
      }}
      delayPressIn={0}
      style={styles.flatlistCoaniner}>
      <View style={styles.left}>
        <Text style={styles.work}>{item.work}</Text>
      </View>
      <View style={styles.middle}>
        {/* <Text style={styles.work}>Plumber</Text> */}
        <Text style={styles.discriptin}>Education : {item.education}</Text>
        <Text style={styles.date}>Skill: {item.skill}</Text>
      </View>
      <View style={styles.right}></View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.MainContianer}>
        <View style={styles.topContainer}>
          <View style={styles.searchbox}>
            <Text style={styles.title}>Bookmarked Candidate</Text>
          </View>
          <Searchbox />
        </View>
        <View style={styles.middleContainer}>
          <View>
            <AnimatedFlatList
              data={this.state.data}
              renderItem={({item}) => this.renderItem(item)}
              animationType={AnimationType.SlideFromBottom}
              animationDuration={1000}
              focused={this.state.focused}
            />
          </View>
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
    height: h('17%'),
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
    marginLeft: h('1%'),
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
  date: {
    color: red,
    fontWeight: 'bold',
    fontSize: h('2%'),
    marginTop: h('1%'),
  },
  urgnet: {
    backgroundColor: 'rgba(235, 28, 45, 0.9)',
    width: '70%',
    height: '20%',
    marginTop: h('3%'),
    borderTopRightRadius: h('10%'),
    borderBottomRightRadius: h('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  urgent: {
    color: white,
    fontWeight: 'bold',
    fontSize: h('2%'),
  },
});
