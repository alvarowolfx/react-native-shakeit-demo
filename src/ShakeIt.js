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

export default class ShakeIt extends Component {
    constructor(props){
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress(){
        console.log('Olá console');
        alert('Olá novamente');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Olá Dev MT
                </Text>
                <TouchableHighlight style={styles.button} onPress={this._onPress}>
                    <Text style={styles.buttonText}>Touch me</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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

