import {hideCircle} from './hide.js'
import { valueCircle } from './value.js';
import { animateCircle } from './animate.js';
export class Progress {
    constructor(root) {
        this.root = root;
        this.state = {
            value: 0,
            animate: false,
            hide:false
        };
    }
    setValue(value) {
        this.state.value = Math.min(100, Math.max(0, value))
        valueCircle(this.root, this.state.value)
    }
    setAnimate(state) {
        this.state.animate = state;
        animateCircle(this.root, this.state.animate)
    }
    setHide(state) {
        this.state.hide = state;
        hideCircle(this.root, this.state.hide)
    }
}