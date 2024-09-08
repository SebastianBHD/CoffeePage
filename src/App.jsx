
import './App.css'
import NavBar from './components/navBar'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/productSlider' 
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'
import Section7 from './components/section7'
import Footer from './components/footer'


function App() {

  return (
    <>
      <div className="bg-neutral-200 flex flex-col justify-center">
        <NavBar />
        <Section1 />
        <Section2 />
        <Section3 title="Trending Products"/>
        <Section4 />
        <Section5 />
        <Section3 title="New Products"/>
        <Section6 />
        <Section7 />
        <Footer />
      </div>
    </>
  )
}

export default App
