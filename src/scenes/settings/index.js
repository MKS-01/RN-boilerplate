import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import CheckConnection from '_utils/CheckConnection';
import { useAuthValue } from '_store/auth-context';

const SignOut = () => {
  const { signOut } = useAuthValue();
  return <Button title="Sign out" onPress={() => signOut()} />;
};

const Settings = () => {
  let network = CheckConnection();

  if (network === true) {
    return (
      <SafeAreaView>
        <Text>Settings: connected</Text>
        <SignOut />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Text>Settings: no network</Text>
    </SafeAreaView>
  );
};

export default Settings;
