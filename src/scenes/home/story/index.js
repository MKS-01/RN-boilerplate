import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

const Story = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Story</Text>
      <View>
        <Button
          title="Go to Feed"
          onPress={() => navigation.navigate('Feed')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Story;
