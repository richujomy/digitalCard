import About from './About.jsx'
import Interest from './Interest.jsx'
import Info from './Personal.jsx'
import Footer from './footer.jsx'

export default function Card(){
    return(
        <div className="card">
            <Info />
            <About />
           <Interest />
           <Footer/>
            
        </div>
    )
    
}