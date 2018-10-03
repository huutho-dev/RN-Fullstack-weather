import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import SearchInput from './components/SearchInput';
import getImageFromWeather from './utils/getImageForWeather';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'San Fancisco',
    };
  }

  handleUpdateLocation = locationName => {
    this.setState({
      location: locationName,
    });
  };

  render() {
    const { location } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          style={styles.imageContainer}
          imageStyle={styles.image}
          source={getImageFromWeather('Clear')}
        >
          <View style={styles.detailContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
            <Text style={styles.textStyle}>Light Cloud</Text>
            <Text style={[styles.mediumText, styles.textStyle]}>24℃</Text>
            <SearchInput
              placeHolder="Search any city"
              style={styles.textInput}
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',

    ...Platform.select({
      ios: { fontFamily: 'AvenirNext-Regular' },
      android: { fontFamily: 'Roboto' },
    }),
  },
  largeText: {
    fontSize: 34,
  },
  mediumText: {
    fontSize: 18,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 20,
  },
});
