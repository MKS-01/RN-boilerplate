import React from 'react'
import styled from 'styled-components/native'
import { useTheme } from '_store/theme-context'
import { Switch } from 'react-native'

const HomeScreen = () => {
    const theme = useTheme()
    return (
        <Container>
            <Switch
                value={theme.mode === 'dark'}
                onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
            />
        </Container>
    )
}

export default HomeScreen

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.background};
  `

