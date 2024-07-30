import { Actions } from './Actions'
import './styles/Monitor.css'

export function Monitor() {
    return (
        <div id="monitor" className="on" style={{width: '100%'}}>
                <div id="screen">
                    <div id="crt">
                        <div className="scanline"></div>
                        <div className="terminal">

                            <Actions></Actions>
                        </div>
                    </div>
                </div>
        </div>
    )
}