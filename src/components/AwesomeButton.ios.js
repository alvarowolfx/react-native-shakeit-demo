/**
 * Created by alvaroviebrantz on 11/03/16.
 */

import React,{
    Component,
    TouchableHighlight,
    Text,
    StyleSheet,
    PropTypes
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

        this._onPress = this._onPress.bind(this);
    }

    _onPress(){
        this.props.onPress();
    }

    render(){
        return (
            <TouchableHighlight style={[styles.button,{backgroundColor: this.props.color}]} onPress={this._onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>);
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