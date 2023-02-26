import { Text, View, useWindowDimensions } from 'react-native'
import React, { useState, FC } from 'react'
import Women from '../screens/HomepageComponents/HomescreenComponents/Women';
import Home from '../screens/HomepageComponents/HomescreenComponents/Home';
import Men from '../screens/HomepageComponents/HomescreenComponents/Men';
import Kids from '../screens/HomepageComponents/HomescreenComponents/Kids';
import { SceneMap, TabView } from 'react-native-tab-view';
import Baby from '../screens/HomepageComponents/HomescreenComponents/Baby';

const Tabview: FC = () => {
    
    const layout = useWindowDimensions();

    const renderScene = SceneMap({
        first: Home,
        second: Women,
        third: Men,
        fourth: Kids,
        fifth: Baby
    });

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Home' },
        { key: 'second', title: 'Women' },
        { key: 'third', title: 'Men' },
        { key: 'forth', title: 'Kids' },
        { key: 'fifth', title: 'Baby' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}

export default Tabview
