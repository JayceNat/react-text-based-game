import { OutlineContainer } from './OutlineContainer'
import './styles/CommandTerminal.css'

export function CommandTerminal() {
    return (
        <div style={{width: '75%'}}>
            <OutlineContainer headerText='Command Terminal'>
                <div className='terminal-container'>
                    <div>Please enter a command:</div>
                    <div>{'>|'}</div>
                </div>

            </OutlineContainer>
        </div>
    )
}