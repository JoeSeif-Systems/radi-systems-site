import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Home from './components/Home'
import NavbarComponent from './components/NavBar'
import QuotationForm from './components/Qoute'

function App() {


  return (
    <>
    <NavbarComponent />
    <div className='container fluid'>
      <div className='row'>
        {/* <div className='title'>Radi Systems Inc.</div> */}
      </div>
      <Home />
      <br />
      <AboutUs />
      <div className='row'>
        <QuotationForm />
      </div>
      <ContactUs />
    </div>
    <Footer />
    </>
  )
}

export default App
