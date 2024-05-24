import React from 'react'
import Privacycontent from '../../Components/Privacycontent/Privacycontent'

import { Helmet } from 'react-helmet';


const PrivacyPolicy = () => {
  return (
    <div>
        <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <Privacycontent/>
      
    </div>
  )
}

export default PrivacyPolicy