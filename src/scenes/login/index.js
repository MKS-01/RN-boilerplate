import * as React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';
// import { useAuthValue } from 'src/store-context/*';

const signIn = (username, password) => {
  // console.log('check', username, password);
};

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const { signIn } = React.useContext(AuthContext);
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
