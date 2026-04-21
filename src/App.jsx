// import React from 'react'
// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import Navbar from './components/Navbar'
// import AboutPage from './pages/AboutPage'
// import Footer from './components/Footer'
// import OurCredentialsPage from './pages/OurCredentialsPage'
// import DemoPage from './pages/DemoPage'
// import ContactPage from './pages/ContactPage'
// import OurGalleryPage from './pages/OurGalleryPage'
// import JoinUsPage from './pages/JoinUsPage'
// import OurProject from './pages/OurProject'
// import WebSolutionsPage from './pages/WebSolutionsPage'
// import DigitalSolutions from './pages/DigitalSolutions'
// import MobileApp from './pages/MobileApp'
// import Branding from './pages/Branding'
// import Events from './pages/Events'
// import Ecommerce from './pages/Ecommerce'
// import ScrollToTop from './ScrollToTop'
// import UseScrollAnimation from './components/UseScrollAnimation'


// // import UseScrollAnimation from './components/UseScrollAnimation'
// // import DemoPage from './pages/DemoPage'

// function App() {

//   // UseScrollAnimation()
//   UseScrollAnimation();

//   return (
//     <BrowserRouter>
//     <ScrollToTop />
//     <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/our-credentials" element={<OurCredentialsPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/our-gallery" element={<OurGalleryPage />} />
//         <Route path="/join-us" element={<JoinUsPage />} />
//         <Route path="/projects" element={<OurProject />} />

//         <Route path="/services/web-solutions" element={<WebSolutionsPage />} />
//         <Route path="/services/digital-solutions" element={<DigitalSolutions />} />
//         <Route path="/services/mobile-app" element={<MobileApp />} />
//         <Route path="/services/branding" element={<Branding />} />
//         <Route path="/services/events" element={<Events />} />
//         <Route path="/services/ecommerce" element={<Ecommerce />} />
//         {/* <Route path="/demopage" element={<DemoPage />} /> */}
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   )
// }

// export default App



import React from 'react'
import './App.css'
import './components/scrollAnimations.css' // ✅ CSS import karo
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'
import OurCredentialsPage from './pages/OurCredentialsPage'
import ContactPage from './pages/ContactPage'
import OurGalleryPage from './pages/OurGalleryPage'
import JoinUsPage from './pages/JoinUsPage'
import OurProject from './pages/OurProject'
import WebSolutionsPage from './pages/WebSolutionsPage'
import DigitalSolutions from './pages/DigitalSolutions'
import MobileApp from './pages/MobileApp'
import Branding from './pages/Branding'
import Events from './pages/Events'
import Ecommerce from './pages/Ecommerce'
import ScrollToTop from './ScrollToTop'
import UseScrollAnimation from './components/UseScrollAnimation'

// ✅ Alag inner component — BrowserRouter ke andar render hoga
function AppContent() {
  UseScrollAnimation(); // ✅ Ab sahi jagah hai

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-credentials" element={<OurCredentialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-gallery" element={<OurGalleryPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="/projects" element={<OurProject />} />
        <Route path="/services/web-solutions" element={<WebSolutionsPage />} />
        <Route path="/services/digital-solutions" element={<DigitalSolutions />} />
        <Route path="/services/mobile-app" element={<MobileApp />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/events" element={<Events />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
      </Routes>
      <Footer />
    </>
  )
}

// ✅ App sirf BrowserRouter wrap karta hai
function App() {
  return (
    <BrowserRouter>
      <AppContent />  {/* Hook ab Router ke andar hai */}
    </BrowserRouter>
  )
}

export default App