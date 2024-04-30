import React from 'react'
import Privacycontent from '../../Components/Privacycontent/Privacycontent'
import Offersaction from "../../Components/Offersaction/offersaction"
import Contactmage from '../../assets/privacy.png'
import Header from "../../Components/Common/Header/Header";


const PrivacyPolicy = () => {
  return (
    <div>
        <Header
        title="سياسة الخصوصية لجسور"
        paragraph="أبرمت شركة نيوم للهيدروجين الأخضر (NGHC) مؤخرًا اتفاقيات مالية مع 23 بنكًا وشركة استثمارية محلية وإقليمية ودولية، مما يمثل علامة بارزة في المشروع."
        buttontext="للصحافة والإعلام"
         image ={Contactmage}
        />
      <Privacycontent/>
      <Offersaction/>
    </div>
  )
}

export default PrivacyPolicy