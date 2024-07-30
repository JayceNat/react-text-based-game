import { Actions } from './Actions'
import './styles/Monitor.css'

export function Monitor() {
    return (
        <div id="monitor" className="on" style={{width: '100%'}}>
            <div className='texture-overlay'></div>
                <div id="screen">
                    <div id="crt">
                        {/* <div className='lines-overlay'></div>
                        <div className='dots-overlay'></div> */}
                        {/* <Actions></Actions> */}
                        <div className="scanline"></div>
                        <div className="terminal"></div>
                        {/* {children} */}
                    </div>
                </div>
        </div>
    )
}