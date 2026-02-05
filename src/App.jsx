import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

function App(){
  return(
    <div className="min-h-screen bg-slate-50">

      <Header />

      <Hero />

      <Features />

      <Pricing />

      <Testimonials />

      <Footer />

    </div>
  )
}
export default App