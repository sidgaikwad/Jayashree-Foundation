import React, {useEffect} from 'react'
import logo1 from '../assets/logos/3m.svg'
import logo2 from '../assets/logos/barstool-store.svg'
import logo3 from '../assets/logos/budweiser.svg'
import logo4 from '../assets/logos/buzzfeed.svg'
import logo5 from '../assets/logos/forbes.svg'
import logo6 from '../assets/logos/macys.svg'
import logo7 from '../assets/logos/menshealth.svg'
import logo8 from '../assets/logos/mrbeast.svg'


const Supporters = () => {
  useEffect(() => {
    const copy = document.querySelector('.logos-slide').cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);
  return (
    <div className="logos">
      <div className="logos-slide flex items-center justify-center">
        <img src={logo1} alt='logo1'/>
        <img src={logo2} alt='logo2'/>
        <img src={logo3} alt='logo3'/>
        <img src={logo4} alt='logo4'/>
        <img src={logo5} alt='logo5'/>
        <img src={logo6} alt='logo6'/>
        <img src={logo7} alt='logo7'/>
        <img src={logo8} alt='logo8'/>
      </div>
    </div>
  )
}

export default Supporters;