import React from "react";
import Podcathero from "../../Components/Podcathero/Podcathero";
import PodCasts from "./PodCasts/PodCasts";
import Path from "../../Components/Path/Path";
import Offersaction from "../../Components/Offersaction/offersaction";


const PodCast = () => {
  const path = {
    topic : "التحالفات الاستراتيجية: القادة السياسيون وتوازن القوى",
    home : "بيت",
    newpage : "بودكاست"
  }
  return (
    <div>
      <Path route={path}/>
      <Podcathero/>
      <PodCasts/>
      <PodCasts/>
      <Offersaction/>
    </div>
  );
};

export default PodCast;
