import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button, View } from 'react-native';
import CheckConnection from '_utils/CheckConnection';
import { useAuthValue } from '_store/auth-context';

const Home = ({ navigation }) => {
  const { signOut } = useAuthValue();

  let network = CheckConnection();

  if (network === true) {
    return (
      <SafeAreaView>
        <Text>HOme:connected</Text>
        <Button title="Sign out" onPress={() => signOut()} />

        <View>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Text>Home:no network</Text>
    </SafeAreaView>
  );
};

export default Home;
