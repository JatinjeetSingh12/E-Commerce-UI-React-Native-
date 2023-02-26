import { Text, View, useWindowDimensions } from 'react-native'
import React, { useState, FC } from 'react'

const Tabview: FC = () => {
    const layout = useWindowDimensions();

    const Home = () => {
        return <Home />
    }

    const renderScene = SceneMap({
        Home: Home,
        second: SecondRoute,
    });

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    return (
        <View>
            <Text>Tabview</Text>
        </View>
    )
}

export default Tabview
