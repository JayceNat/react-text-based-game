import reactLogo from '../images/react.svg'
import viteLogo from '/vite.svg'
import '../styles/Header.css'
import { OutlineContainer } from './OutlineContainer'

export function Header() {
    return (
        <OutlineContainer headerText=''>
            <div className='header-bar'>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h2 style={{marginLeft: '10px'}}>Text Based Game</h2>
            </div>
        </OutlineContainer>
    )
}