import { Progress } from './progress.js';

export function renderProgress(root) {
    root.innerHTML = `
        <div class="progress">
            <h3 class="progress__title">Progress</h3>
            <div class="progress__wrapper">
                <svg class="progress__svg" width="160" height="160">
                    <circle class="progress__circle-bg" cx="80" cy="80" r="70"></circle>
                    <circle class="progress__circle" cx="80" cy="80" r="70"></circle>
                </svg>
                <div class="progress__controls">
                    <div class="progress__control">
                    <div class="control-left">
                        <input type="number" class="progress__input" value="0" min="0" max="100"/>
                    </div>
                         <div class="control-right">
                            Value
                        </div>
                    </div>
                    <div class="progress__control">
                        <div class="control-left">
                            <label class="switch">
                                <input type="checkbox" class="progress__animate">
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="control-right">
                            Animate
                        </div>
                    </div>
                    <div class="progress__control">
                        <div class="control-left">
                            <label class="switch">
                                <input type="checkbox" class="progress__hide">
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="control-right">
                            Hide
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const progress = new Progress(root);
    const input = root.querySelector('.progress__input');
    const animateCheckBox = root.querySelector('.progress__animate');
    const hideCheckBox = root.querySelector('.progress__hide');
    
    progress.setValue(0)
    input.addEventListener('input', () => {
        let value = Number(input.value);
        value = Math.min(100, Math.max(0, value)); 
        input.value = value;
        progress.setValue(value)
    })
    animateCheckBox.addEventListener('change', () => {
        progress.setAnimate(animateCheckBox.checked)
    })
    hideCheckBox.addEventListener('change', () => {
        progress.setHide(hideCheckBox.checked)
    })
}
