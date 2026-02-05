import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Pricing from "./components/pricing";

function App(){
  return(
    <div className="min-h-screen bg-slate-50">

      <Header />

      <Hero />

      <Features />

      <Pricing />

    </div>
  )
}
export default App