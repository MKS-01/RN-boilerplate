import React from 'react';
import { SafeAreaView, Text, Button, View } from 'react-native';
import CheckConnection from '_utils/CheckConnection';

const About = ({ navigation }) => {
  let network = CheckConnection();

  if (network === true) {
    return (
      <SafeAreaView>
        <Text>About:connected</Text>
        {/* <Button title="Go to About" onPress={() => navigation.push('About')} /> */}
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Text>About: no network</Text>
    </SafeAreaView>
  );
};

export default About;
