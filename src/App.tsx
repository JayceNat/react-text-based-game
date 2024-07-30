import './App.css'
import { CommandTerminal } from './components/CommandTerminal'
import { Header } from './components/Header'
import { Actions } from './components/Actions'
import { Keyboard } from './components/Keyboard'
import { Monitor } from './components/Monitor'

function App() {

  return (
    <>
    <Monitor></Monitor>

      {/* <div className='texture-overlay'></div>
      <div className='lines-overlay'></div>
      <div className='dots-overlay'></div>
      <div className='page-container'>
        

        <Header></Header>
        <div className='terminal-area'>
          <CommandTerminal></CommandTerminal>
          <Actions></Actions>
        </div>
        <Keyboard></Keyboard>
      </div> */}
    </>
  )
}

export default App
