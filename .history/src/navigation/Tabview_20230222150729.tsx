import {  useWindowDimensions } from 'react-native'
import React, { useState, FC } from 'react'
import { SceneMap, TabView,TabBar } from 'react-native-tab-view';

import Women from '../screens/HomepageComponents/HomescreenComponents/Women';
import Home from '../screens/HomepageComponents/HomescreenComponents/Home';
import Men from '../screens/HomepageComponents/HomescreenComponents/Men';
import Kids from '../screens/HomepageComponents/HomescreenComponents/Kids';
import Baby from '../screens/HomepageComponents/HomescreenComponents/Baby';

const Tabview: FC = () => {

    const layout = useWindowDimensions();

    const renderScene = SceneMap({
        first: Home,
        second: Women,
        third: Men,
        forth: Kids,
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
        <>
             <TabView
             navigationState={{ index, routes }}
             renderScene={renderScene}
             onIndexChange={setIndex}
             initialLayout={{ width: layout.width }}
             renderTabBar={props => <TabBar {...props} indicatorStyle={{backgroundColor:'black'}} style={{backgroundColor: 'white'}}/>}
             />
             </>
    )
}

export default Tabview
