import * as React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';
import { useAuthValue } from '_store/auth-context';

const signIn = (username, password) => {};

const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = useAuthValue();

  return (
    <SafeAreaView>
      <View>
        <Text>Screen: Login</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Sign in"
          onPress={() => signIn({ username, password })}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
