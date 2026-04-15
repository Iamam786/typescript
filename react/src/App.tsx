
import './App.css'
import { Counter } from './components/Counter'
import { TeaCard } from './components/TeaCard'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <TeaCard name='milktea' price={5} isSpecial={true} />
<Counter />
    </>
  )
}

export default App
