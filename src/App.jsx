import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhatYouEarn from './components/WhatYouEarn'
import WhatsInvolved from './components/WhatsInvolved'
import AboutCabverts from './components/AboutCabverts'
import WhatHappensNext from './components/WhatHappensNext'
import FAQs from './components/FAQs'
import SignUpForm from './components/SignUpForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="font-['Inter',sans-serif]">
      <Hero />
      <HowItWorks />
      <WhatYouEarn />
      <WhatsInvolved />
      <AboutCabverts />
      <WhatHappensNext />
      <FAQs />
      <SignUpForm />
      <Footer />
    </main>
  )
}
