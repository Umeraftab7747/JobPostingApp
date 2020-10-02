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
      {
        id: 1,
        work: 'Plumber',
        shield: true,
        urgent: true,
        date: '25.7.2020',
        discription: 'i need a plumber with 2 year experince',
      },
      {
        id: 2,
        work: 'React',
        shield: false,
        urgent: false,
        date: '25.7.2020',
        discription: 'i need Reactjs developer with 1 year with good protflio',
      },
      {
        id: 3,
        work: 'React native',
        shield: false,
        urgent: false,
        date: '25.7.2020',
        discription: 'Reactnative with express js and 2 year experince ',
      },
      {
        id: 4,
        work: 'Firebase',
        shield: true,
        urgent: false,
        date: '25.7.2020',
        discription: 'firebase Developer with Android for Fulltime Job',
      },
      {
        id: 5,
        work: 'Wood Cuter',
        shield: true,
        urgent: true,
        date: '25.7.2020',
        discription: 'Wood Cuter require for 1 day job',
      },
      {
        id: 6,
        work: 'Carpanter',
        shield: false,
        urgent: false,
        date: '25.7.2020',
        discription: 'need a good Carpanter for a 1 day job',
      },
      {
        id: 7,
        work: 'Driver',
        shield: false,
        urgent: false,
        date: '25.7.2020',
        discription: 'Perment Driver Required for 1 year in verified Firm',
      },
      {
        id: 8,
        work: 'Php',
        shield: true,
        urgent: true,
        date: '25.7.2020',
        discription:
          'Php developer with 8 year Experince required for Full time job',
      },
      {
        id: 9,
        work: 'Express.js',
        shield: false,
        urgent: false,
        date: '25.7.2020',
        discription: 'Express js developer required for 1 day work',
      },
      {
        id: 99,
        work: 'Backend',
        shield: true,
        urgent: true,
        date: '25.7.2020',
        discription: 'good backend Developer Required for part time work',
      },
      {
        id: 11,
        work: 'Ui/Ux',
        shield: false,
        urgent: false,
        date: '25.7.2020',
        discription:
          'A person who have good Knowledge of Ui/ux can apply thanks',
      },
    ],
    focused: true,
  };

  renderItem = (item, index) => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('JobDetail');
      }}
      delayPressIn={0}
      style={styles.flatlistCoaniner}>
      <View style={styles.left}>
        <Text style={styles.work}>{item.work}</Text>
        {item.urgent ? (
          <View style={styles.urgnet}>
            <Text style={styles.urgent}>URGENT</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.middle}>
        {/* <Text style={styles.work}>Plumber</Text> */}
        <Text style={styles.discriptin}>{item.discription}</Text>
        <Text style={styles.date}>Date: {item.date}</Text>
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
    </TouchableOpacity>
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
              animationType={AnimationType.SlideFromBottom}
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
