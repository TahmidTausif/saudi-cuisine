import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <div className='h-[1000px]'>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      

      <Footer></Footer>
    </div>
  )
}

export default App
