import { OutlineContainer } from './OutlineContainer'
import '../styles/CommandTerminal.css'
import { Monitor } from './Monitor'

export function CommandTerminal() {
    return (
        <div style={{width: '75%'}}>
            <OutlineContainer headerText='Command Terminal'>
                <div className='terminal-container'>
                    <div>Please enter a command:</div>
                    <div>{'>|'}</div>
                </div>

            </OutlineContainer>

            {/* <Monitor></Monitor> */}
        </div>
    )
}