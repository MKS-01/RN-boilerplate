import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import CheckConnection from '_utils/CheckConnection'

const Settings = () => {
    let network = CheckConnection();

    if (network === true) {
        return (
            <SafeAreaView>
                <Text>Settings: connected</Text>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView>
            <Text>Settings: no network</Text>
        </SafeAreaView>
    )
}

export default Settings
