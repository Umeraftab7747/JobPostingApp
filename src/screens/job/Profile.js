/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Black, red, white} from '../color';
import {Appbtn, AppField, Navheader, Searchbox} from '../../components';
import {Icon} from 'react-native-elements';

export class Profile extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          source={require('../../assets/pbg.jpg')}
          style={styles.top}>
          <View style={styles.top2}>
            <TouchableOpacity
              delayPressIn={0}
              onPress={() => {
                this.props.navigation.navigate('ProfileDiscription');
              }}
              style={styles.topbtn}>
              <Icon name={'create'} type="ionicon" color={white} size={35} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.middle}>
          <ImageBackground
            source={require('../../assets/pro.jpg')}
            style={styles.circle}>
            <TouchableOpacity style={styles.camerabtn}>
              <Icon name={'camera'} type="ionicon" color={white} size={35} />
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.name}>UMER AFTAB</Text>
          <Text style={styles.email}>UmerAftab7747@gmail.com</Text>

          <View style={styles.DetailContainer}>
            {/* detail container1 */}
            <View style={styles.topDetails}>
              <View style={styles.rightDetail}>
                <Icon
                  name={'school'}
                  type="ionicon"
                  color={'#0007'}
                  size={35}
                />
              </View>
              <View style={styles.leftDetail}>
                <Text style={styles.education}>Education</Text>
                <Text style={styles.subject}>Msc.Computer Science</Text>
              </View>
            </View>
            {/* detail containerend */}
            {/* detail container1 */}
            <View style={styles.topDetails}>
              <View style={styles.rightDetail}>
                <Icon
                  name={'ribbon'}
                  type="ionicon"
                  color={'#0007'}
                  size={35}
                />
              </View>
              <View style={styles.leftDetail}>
                <Text style={styles.education}>Field Category</Text>
                <Text style={styles.subject}>React Native</Text>
              </View>
            </View>
            {/* detail containerend */}
            {/* detail container1 */}
            <View style={styles.topDetails}>
              <View style={styles.rightDetail}>
                <Icon name={'time'} type="ionicon" color={'#0007'} size={35} />
              </View>
              <View style={styles.leftDetail}>
                <Text style={styles.education}>Experience</Text>
                <Text style={styles.subject}>2 Years</Text>
              </View>
            </View>
            {/* detail containerend */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  top: {
    // backgroundColor: 'rgba(235, 28, 45, 0.8)',
    width: '100%',
    height: h('30%'),
  },
  top2: {
    backgroundColor: 'rgba(235, 28, 45, 0.8)',
    width: '100%',
    height: h('30%'),
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  middle: {
    // backgroundColor: 'gold',
    width: '100%',
    height: h('70'),
    alignItems: 'center',
  },
  topbtn: {
    marginRight: h('2%'),
    marginTop: h('1%'),
  },
  circle: {
    height: 150,
    width: 150,
    borderRadius: 1000,
    backgroundColor: white,
    marginTop: -h('12%'),
    elevation: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  camerabtn: {
    backgroundColor: '#0008',
    width: '100%',
    height: h('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: red,
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    marginTop: h('2%'),
  },
  email: {
    color: Black,
    fontSize: h('2%'),
  },
  DetailContainer: {
    // backgroundColor: 'gold',
    width: '100%',
    height: h('45%'),
    paddingTop: h('6.5%'),
  },
  topDetails: {
    // backgroundColor: red,
    width: '100%',
    height: h('10%'),
    flexDirection: 'row',
  },
  rightDetail: {
    // backgroundColor: 'green',
    width: '20%',
    height: h('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftDetail: {
    // backgroundColor: 'tomato',
    width: '80%',
    height: h('10%'),
    justifyContent: 'center',
  },
  education: {
    fontWeight: 'bold',
    fontSize: h('2.2%'),
    color: red,
  },
  subject: {
    fontWeight: 'bold',
    fontSize: h('2%'),
  },
});
