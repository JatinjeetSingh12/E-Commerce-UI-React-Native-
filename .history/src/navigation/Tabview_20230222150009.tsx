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

    // const Home = () => {
    //     return <Women/>
    // }
    // const Women = () => {
    //     return <Women />
    // }
    // const Men = () => {
    //     return <Home />
    // }
    // const Kids = () => {
    //     return <Home />
    // }
    // const Baby = () => {
    //     return <Home />
    // }

    const renderScene = SceneMap({
        Home: Home,
        Women: Women,
        Men: Men,
        Kids: Kids,
        Baby: Baby
    });

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'HOME' },
        { key: 'second', title: 'WOMEN' },
        { key: 'third', title: 'MEN' },
        { key: 'forth', title: 'KIDS' },
        { key: 'fifth', title: 'BABY' },
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
