/* eslint-disable handle-callback-err */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {red} from './color';

export class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('WelcomeScreen');
    }, 3000);
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.txtContainer}>
          <Image style={styles.img} source={require('../assets/sps.png')} />
          <Text style={styles.txt}>Search Jobs</Text>
        </View>
        <View style={styles.loading}>
          <ActivityIndicator
            style={{marginRight: h('3%')}}
            size="large"
            color="#ea5455"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  txtContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txt: {
    color: red,
    fontSize: h('4%'),
    fontWeight: 'bold',
    // marginRight: h('5%'),
  },
  img: {
    width: '30%',
    height: '50%',
    resizeMode: 'contain',
    // marginRight: h('6%'),
    marginBottom: h('2%'),
  },
  loading: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: -h('45%'),
  },
});
