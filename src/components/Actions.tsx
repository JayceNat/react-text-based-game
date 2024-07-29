import { useState } from "react";
import './styles/Actions.css'
import { OutlineContainer } from "./OutlineContainer";

const changed = (colorVar: string = 'grey') => {
    document.body.style.setProperty('--user-accent-color', `var(--custom-${colorVar || 'grey'})`);
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
                    <button className='action-button' onClick={() => changed()}>
                        Terminal Default
                    </button>
                    <button className='action-button' onClick={() => changed('blue')}>
                        Terminal Blue
                    </button>
                    <button className='action-button' onClick={() => changed('amber')}>
                        Terminal Amber
                    </button>
                    <button className='action-button' onClick={() => changed('green')}>
                        Terminal Green
                    </button>
                    <button className='action-button' onClick={() => changed('white')}>
                        Terminal White
                    </button>
                    <button className='action-button' onClick={() => changed('cinder')}>
                        Terminal Black
                    </button>
                </div>
            </OutlineContainer>
        </div>
    )
}