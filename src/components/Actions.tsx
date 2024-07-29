import { useState } from "react";
import './styles/Actions.css'
import { OutlineContainer } from "./OutlineContainer";

const setTheme = (colorVar: string = 'grey') => {
    document.body.style.setProperty('--user-accent-color', `var(--${colorVar || 'grey'}-color)`);
    document.body.style.setProperty('--user-bg-color', `var(--${colorVar || 'grey'}-bg)`);
}

export function Actions() {
    const [count, setCount] = useState(0);

    return (
        <div style={{width: '25%'}}>
            <OutlineContainer headerText="Actions">
                <div className="card">
                    <button className='action-button' onClick={() => setCount(count+1)}>
                        count is {count}
                    </button>
                    <button className='action-button' onClick={() => setTheme()}>
                        Default Theme
                    </button>
                    <button className='action-button' onClick={() => setTheme('blue')}>
                        Blue Theme
                    </button>
                    <button className='action-button' onClick={() => setTheme('amber')}>
                        Amber Theme
                    </button>
                    <button className='action-button' onClick={() => setTheme('green')}>
                        Green Theme
                    </button>
                    <button className='action-button' onClick={() => setTheme('white')}>
                        White Theme
                    </button>
                </div>
            </OutlineContainer>
        </div>
    )
}