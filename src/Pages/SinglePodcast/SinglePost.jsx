import React from 'react'
import Path from '../../Components/Path/Path'
import SinglePodCastMain from './SinglePodCastMain/SinglePodCastMain'
import Offersaction from '../../Components/Offersaction/offersaction'


const SinglePost = () => {
  const path = {
    topic : "التحالفات الاستراتيجية: القادة السياسيون وتوازن القوى",
    home : "بيت",
    newpage : "سياسة"
  }
  return (
    <div>
      <Path route={path}/>
      <SinglePodCastMain/>
      <Offersaction/>
    </div>
  )
}

export default SinglePost