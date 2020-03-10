import { useState, useEffect } from 'react'
import NetInfo from "@react-native-community/netinfo";


const CheckConnection = () => {
    const [netInfo, setNetInfo] = useState(false)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setNetInfo(state.isConnected);
        });
        return () => unsubscribe();

    }, [])

    return netInfo;
}

export default CheckConnection
