import 'react-native-gesture-handler';
import { AppearanceProvider } from 'react-native-appearance';

import React from 'react';

import Navigator from '_navigations';

const App = () => (
    <AppearanceProvider>
        <Navigator />
    </AppearanceProvider>);

export default App;



