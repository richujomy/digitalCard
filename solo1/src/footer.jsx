import React from 'react'
import facebookIcon from './Facebook Icon.png'
import twitterIcon from './Twitter Icon.png'
import gitHubIcon from './GitHub Icon.png'
import instagramIcon from './Instagram Icon.png'

export default function Footer() {
    return(
        <>
       <footer>
 
         
      <div className='footer'>
        <div className='icon'>
        <img src={twitterIcon} />
                <img src={facebookIcon} />
                <img src={gitHubIcon} />
                <img src={instagramIcon} />
        </div>

      </div>
        
   
      
       </footer>
        </>
    )
}