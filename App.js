/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const App: () => React$Node = () => {
  const MapStyle = [
    {
      featureType: 'administrative.province',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapStyle}
          initialRegion={{
            latitude: 35.6008333,
            longitude: -82.5541667,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
          zoomEnabled={false}
          zoomTapEnabled={false}
          zoomControlEnabled={false}
          rotateEnabled={false}
          pitchEnabled={false}
          toolbarEnabled={false}
          moveOnMarkerPress={false}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
