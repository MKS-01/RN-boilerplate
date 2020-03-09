import React, { createContext, useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { Appearance, AppearanceProvider } from 'react-native-appearance'
import lightTheme from './light'
import darkTheme from './dark'

const ThemeContext = createContext({
    mode: defaultMode,
    setMode: mode => console.log(mode)
})

export const useTheme = () => React.useContext(ThemeContext)

const ManageThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useState(defaultMode)

    const setMode = mode => {
        setThemeState(mode)
    }

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setThemeState(colorScheme)
        })
        return () => subscription.remove()
    }, [])

    return (
        <ThemeContext.Provider value={{ mode: themeState, setMode }}>
            <ThemeProvider
                theme={themeState === 'dark' ? darkTheme.theme : lightTheme.theme}>
                <>
                    <StatusBar
                        barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
                    />
                    {children}
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}