import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import NetInfo from "@react-native-community/netinfo";


// function checkNetwork() {
//     // useState hook for setting netInfo
//     const [netInfo, setNetInfo] = useState(false)

//     // It calls when connection changes
//     //  onChange = (newState) => { 
//     //     setNetInfo(newState)
//     // }

//     // useEffect hook calls only once like componentDidMount()
//     useEffect(() => {

//         const unsubscribe = NetInfo.addEventListener(state => {
//             console.log("Connection type", state.type);
//             console.log("Is connected?", state.isConnected);
//             setNetInfo(state.isConnected);
//         });
//         return () => unsubscribe();

//     }, [])


// }


const Home = () => {
    const [netInfo, setNetInfo] = useState(false)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            let status = state.isConnected
            setNetInfo(state.isConnected);
        });
        return () => unsubscribe();

    }, [])

    if (netInfo === true) {
        return (
            <SafeAreaView>
                <Text>connected</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView>
            <Text>no network</Text>
        </SafeAreaView>
    )
}

export default Home
