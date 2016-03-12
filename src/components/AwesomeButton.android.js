/**
 * Created by alvaroviebrantz on 11/03/16.
 */

import SuperButton from './SuperButton';

export default class AwesomeButton extends SuperButton {
    static get defaultProps(){
        return {
            color: 'green'
        }
    }
}