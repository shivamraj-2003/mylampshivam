import './App.css'
import Header from "./components/Header"
import Content from "./components/Content"
import Calenderview from './components/Calenderview'
function App() {

  return (
    <>
      <Header />
      <Content value={ 6 } val={ 27 } />
    </>
  )
}

export default App
