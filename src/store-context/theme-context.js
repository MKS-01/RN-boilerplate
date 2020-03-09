import React, { createContext, useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance'
import lightTheme from '_styles/light'
import darkTheme from '_styles/dark'

const defaultMode = 'automatic';


const ThemeContext = createContext({
    mode: defaultMode,
    setMode: mode => console.log("mode....", mode)
})

export const useTheme = () => React.useContext(ThemeContext)

export const ManageThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useState(defaultMode)

    const setMode = mode => {
        console.log("color....", mode);
        setThemeState(mode)
    }



    //   const isDark = colorScheme === 'dark';
    useEffect(() => {

        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            console.log("color changes....", colorScheme);
            setThemeState(colorScheme)
        })
        return () => subscription.remove()
    }, [])

    return (
        <ThemeContext.Provider value={{ mode: themeState, setMode }}>
            <ThemeProvider
                theme={themeState === 'dark' ? darkTheme.theme : lightTheme.theme}>


                {children}

            </ThemeProvider>
        </ThemeContext.Provider>
    )
}


// import { Appearance, useColorScheme } from 'react-native-appearance';

/**
 * Get the current color scheme
 */
// Appearance.getColorScheme();

/**
 * Subscribe to color scheme changes with a hook
//  */
// function MyComponent() {
//     const colorScheme = useColorScheme();
//     if (colorScheme === 'dark') {
//         // render some dark thing
//         console.log("...........dark")
//     } else {
//         // render some light thing
//     }
// }

// /**
//  * Subscribe to color scheme without a hook
//  */
// const subscription = Appearance.addChangeListener(({ colorScheme }) => {
//     // do something with color scheme
// });

// // Remove the subscription at some point
// subscription.remove()