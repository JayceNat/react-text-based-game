import { Actions } from './Actions'
import '../styles/Monitor.css'
import { CommandTerminal } from './CommandTerminal'
import { Header } from './Header'
import { Keyboard } from './Keyboard'

export function Monitor() {
    return (
        <div id="monitor" className="on" style={{width: '100%'}}>
                <div id="screen">
                    <div id="crt">
                        <div className="scanline"></div>
                        <div className="terminal">
                            <div className='page-container'>
                                <Header></Header>
                                <div className='terminal-area'>
                                    <CommandTerminal></CommandTerminal>
                                    <Actions></Actions>
                                </div>
                                <Keyboard></Keyboard>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}