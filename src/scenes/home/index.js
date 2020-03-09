// import React from 'react'
// import { SafeAreaView, Text } from 'react-native'

// const Home = () => {
//     return (
//         <SafeAreaView>
//             <Text>Home</Text>
//         </SafeAreaView>
//     )
// }

// export default Home

import React from 'react'
import styled from 'styled-components/native'
// import { useTheme } from '_store/theme-context'
// import { Switch } from 'react-native'

const HomeScreen = () => {
    // const theme = useTheme()
    return (
        <Container>
            {/* <Switch
                value={theme.mode === 'dark'}
                onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
            /> */}
        </Container>
    )
}

export default HomeScreen

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    /* background: ${props => props.theme.background}; */
  `