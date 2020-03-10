import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import CheckConnection from '_utils/CheckConnection'

const Home = () => {

    let network = CheckConnection();

    if (network === true) {
        return (
            <SafeAreaView>
                <Text>HOme:connected</Text>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView>
            <Text>Home:no network</Text>
        </SafeAreaView>
    )
}

export default Home
