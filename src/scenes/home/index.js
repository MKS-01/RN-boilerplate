import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import CheckConnection from '_utils/CheckConnection'
import { useAuthValue } from '_navigations'


const Home = () => {
    const { signOut } = useAuthValue()

    let network = CheckConnection();

    // const [{ state: { } }] = useAuthValue();
    // console.log("check........ state", state)

    if (network === true) {
        return (
            <SafeAreaView>
                <Text>HOme:connected</Text>
                <Button
                    title="Sign out"
                    onPress={() => signOut()}
                />

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
