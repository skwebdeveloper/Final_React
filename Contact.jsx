import React from 'react';
// import './index'
import Effect from './EffectExample'
import Contactcards from './Contactcards'

const Contact = () =>{
return(
    <React.Fragment>
    <h1 style={{ textAlign:"center" }}>Some of my connection </h1>
    
<Contactcards 
    name = "LinkedIn"
    image = "https://image.flaticon.com/icons/svg/174/174857.svg"
/>
<Contactcards />
<Contactcards />
<Contactcards />


    {/* <Effect /> */}
    </React.Fragment>
)
}

export default Contact;