import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

const Feed = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Feed</Text>
      <View>
        <Button
          title="Go to Story"
          onPress={() => navigation.navigate('Story')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Feed;
