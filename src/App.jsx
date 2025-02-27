
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Partner from "./components/Partner";
import Purpose from "./components/Purpose";
import Business from "./components/Business";
import Schedule from "./components/Schedule";
import Monitor from "./components/Monitor";
import Pricing from "./components/Pricing";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";

function App() {
  

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
   <div className="overflow-hidden">
       <Navbar/>
       <Banner/>
       <Partner/>
       <Purpose/>
       <Business/>
       <Schedule/>
       <Monitor/>
       <Pricing/>
       <Feature/>
       <Testimonial/>
   </div>
   </main>
  );
}

export default App;
