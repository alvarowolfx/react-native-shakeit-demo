/**
 * Created by alvaroviebrantz on 11/03/16.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import MapView from 'react-native-maps';
import AwesomeButton from './components/AwesomeButton';

export default class ShakeIt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: null
        };

        this._onPress = this._onPress.bind(this);
        this._onLocationFound = this._onLocationFound.bind(this);
        this._requestLocation = this._requestLocation.bind(this);
    }

    _onPress() {
        this._requestLocation();
    }

    _requestLocation(){
        navigator.geolocation.getCurrentPosition(this._onLocationFound,
            (error) => alert(error.message),
            {timeout: 10000, enableHighAccuracy: true});
    }

    _onLocationFound(position){
        let region = position.coords;
        region.latitudeDelta = 0.01;
        region.longitudeDelta = 0.01;
        this.setState({
            region
        })
    }

    componentDidMount(){
        this._requestLocation();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.messageContainer}>
                    <Text style={styles.welcome}>
                        Olá Dev MT
                    </Text>
                    <AwesomeButton text={"Center on me"} onPress={this._onPress}/>
                </View>
                <MapView style={styles.mapContainer} region={this.state.region}
                         showsUserLocation={true}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    messageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    mapContainer: {
        flex: 3
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 10
    },
    buttonText: {
        color: 'white'
    }
});

