import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import HotelDetail from '../Components/Hotel/HotelDetail';
import { HotelType } from '../Entities/Hotel';
type Props = {
    navigation: NavigationStackProp<{ hotelId: string }>
}

export default class Hotel extends React.Component<Props> {
    static navigationOptions = {
        title: 'Hotel Detail'
    }

    render() {
        const { getParam } = this.props.navigation;
        const hotel: HotelType  = getParam('hotel', 'not found');
        return (
            <View style={{backgroundColor: "#f1f1f1", padding: 10, minHeight: "100%"}}>
                <HotelDetail {...hotel} />
            </View>
        )
    }
}