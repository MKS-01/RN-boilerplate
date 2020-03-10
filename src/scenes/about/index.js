import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import CheckConnection from '_utils/CheckConnection'

const About = () => {
    let network = CheckConnection();

    if (network === true) {
        return (
            <SafeAreaView>
                <Text>About:connected</Text>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView>
            <Text>About: no network</Text>
        </SafeAreaView>
    )
}

export default About
