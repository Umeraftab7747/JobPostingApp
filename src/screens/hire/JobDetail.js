/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../color';
import {Appbtn, AppField, Navheader} from '../../components';
import {Icon} from 'react-native-elements';

export class JobDetail extends Component {
  state = {
    shield: true,
  };
  render() {
    return (
      <View style={styles.MainContianer}>
        <View style={styles.topContainer}>
          <Navheader txt={'JOB DETAILS'} />
          <View style={styles.JobContainer}>
            <View style={styles.bottom}>
              <Text style={styles.jobname}>React native Developer</Text>
              <Text style={styles.Address}>Address: Lahore,Road house 5/2</Text>
              <Text style={styles.dateyz}>Date: 25.2.2021</Text>
              <View style={styles.urgnet}>
                <Text style={styles.urgent}>URGENT</Text>
              </View>
              <View>
                <Text></Text>
              </View>
            </View>
            <View style={styles.left}>
              <View>
                {this.state.shield ? (
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
              </View>
            </View>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.discriptionContainerHeader}>
            <Text style={styles.discriptiontext}>Discription</Text>
          </View>
          <ScrollView>
            <View style={styles.ContainerforDiscription}>
              <Text style={styles.txtstylediscription}>
                i need a React Native Developer with 8 year exprince with more
                than 200+ apps worked on with 8hour skilled job daily who can
                work for 4000$ a week i need a React Native Developer with 8
                year exprince with more than 200+ apps worked on with 8hour
                skilled job daily who can work for 4000$ a week i need a React
                Native Developer with 8 year exprince with more than 200+ apps
                worked on with 8hour skilled job daily who can work for 4000$ a
                week i need a React Native Developer with 8 year exprince with
                more than 200+ apps worked on with 8hour skilled job daily who
                can work for 4000$ a week i need a React Native Developer with 8
                year exprince with more than 200+ apps worked on with 8hour
                skilled job daily who can work for 4000$ a week i need a React
                Native Developer with 8 year exprince with more than 200+ apps
                worked on with 8hour skilled job daily who can work for 4000$ a
                week i need a React Native Developer with 8 year exprince with
                more than 200+ apps worked on with 8hour skilled job daily who
                can work for 4000$ a week i need a React Native Developer with 8
                year exprince with more than 200+ apps worked on with 8hour
                skilled job daily who can work for 4000$ a week i need a React
                Native Developer with 8 year exprince with more than 200+ apps
                worked on with 8hour skilled job daily who can work for 4000$ a
                week
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContianer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  topContainer: {
    // backgroundColor: 'gold',
    width: '100%',
    height: h('35%'),
    alignItems: 'center',
  },
  middleContainer: {
    // backgroundColor: 'dodgerblue',
    width: '100%',
    height: h('50%'),
  },
  bottomContainer: {
    backgroundColor: 'red',
    width: '100%',
    height: h('15%'),
  },
  JobContainer: {
    // backgroundColor: red,
    width: '95%',
    height: h('25%'),
    marginTop: h('1%'),
    borderRadius: h('1%'),
    borderColor: red,
    borderWidth: h('0.1%'),
    flexDirection: 'row',
  },

  bottom: {
    // backgroundColor: 'green',
    width: '80%',
    height: h('25%'),
    justifyContent: 'center',
  },
  left: {
    // backgroundColor: 'orange',
    width: '20%',
    height: h('25%'),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: h('1.5%'),
  },
  jobname: {
    color: red,
    fontSize: h('3%'),
    fontWeight: 'bold',
    marginLeft: h('1%'),
  },
  Address: {
    color: Black,
    fontSize: h('2%'),
    marginTop: h('1%'),
    marginLeft: h('1%'),
  },
  dateyz: {
    color: red,
    fontSize: h('2%'),
    marginTop: h('3%'),
    marginLeft: h('1%'),
  },
  verified: {
    color: red,
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  urgnet: {
    backgroundColor: 'rgba(235, 28, 45, 0.9)',
    width: '40%',
    height: '20%',
    marginTop: h('1%'),
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
  discriptionContainerHeader: {
    width: '100%',
    height: h('5%'),
    backgroundColor: '#0002',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: h('2%'),
  },
  discriptiontext: {
    color: white,
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
  ContainerforDiscription: {
    // backgroundColor: red,
    width: '100%',
    height: h('100%'),
    marginTop: h('3%'),
    paddingLeft: h('1%'),
  },
  txtstylediscription: {
    color: Black,
    fontSize: h('2.5'),
  },
});
