/**
 * Created by alvaroviebrantz on 11/03/16.
 */

import React,{
    Component,
    TouchableHighlight,
    Text,
    StyleSheet,
    PropTypes,
    Animated
} from 'react-native';

export default class SuperButton extends Component {

    static propTypes = {
        onPress: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
        color: PropTypes.string
    };

    static get defaultProps(){
        return {
            color: 'red'
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            buttonScale: new Animated.Value(1)
        };

        this._onPress = this._onPress.bind(this);
    }

    _onPress(){
        let growUp = Animated.timing(this.state.buttonScale, {toValue: 2});
        let shrink = Animated.timing(this.state.buttonScale, {toValue: 1});
        Animated.sequence([
            growUp,
            shrink
        ]).start();
        this.props.onPress();
    }

    render(){
        return (
            <Animated.View style={{transform:[{scale: this.state.buttonScale}]}}>
                <TouchableHighlight style={[styles.button,{backgroundColor: this.props.color}]} onPress={this._onPress}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </TouchableHighlight>
            </Animated.View>);
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        color: 'white'
    }
});