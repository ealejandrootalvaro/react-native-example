import React from 'react';
import { 
    View,
    TouchableHighlight 
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { HotelType } from '../Entities/Hotel';

import HotelCard from '../Components/Hotel/HotelCard';

type Props = {
    navigation: NavigationStackProp
}

const hotels: Array<HotelType> = [
    {
        name: "Silken Gran Hotel Havana",
        stars: 4,
        price: "4.523",
        image: 'https://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3',
        ubication: "Avenida...",
        ubicationImage: "https://ps.w.org/multiple-location-google-map/assets/banner-772x250.png?rev=1451222"
    }, 
    {
        name: "Catalonia Ramblas",
        stars: 3,
        price: "4000",
        image: 'https://www.pgshotel.com/wp-content/uploads/2018/01/slider.jpg',
        ubication: "Carrera...",
        ubicationImage: "https://ps.w.org/multiple-location-google-map/assets/banner-772x250.png?rev=1451222"
    }
]

export default class HomeScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'Lista de Hoteles'
    }

    renderHotels(hotels, navigate) {
        return hotels.map((hotel: HotelType, index) => (
            <TouchableHighlight key={index} style={{marginTop: 15}} onPress={() => navigate("Hotel", {hotel}) }>
                <HotelCard
                name={hotel.name}
                stars={hotel.stars}
                price={hotel.price}
                image={hotel.image}
            />
            </TouchableHighlight>
            
        ))
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{backgroundColor: "#f1f1f1", padding: 10, minHeight: "100%"}}>
                {this.renderHotels(hotels, navigate)}
            </View>
        )
    }
}