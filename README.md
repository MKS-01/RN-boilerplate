# RN-boilerplate

One repo to covers important concepts of React-Native. Check respective branch...

### concept covered

- AuthFlow
- Store: Hooks + context api
- responsive css using pixel calculation
- theme (dark and light mode) using styled-components
- navigation: react-navigation 5.x
- network connection handling

## Getting Started

`$ yarn install`

### before running apps on iOS

`$ cd ios && pod install`

`$ cd ..`

### Running your React Native application

- android

`$ npx react-native run-android`

- iOS

`$ npx react-native run-ios`

### Change default iOS Simulator

on root directory

`$ xcrun simctl list devices`

`$ npx react-native run-ios --simulator="iPhone 11"`
