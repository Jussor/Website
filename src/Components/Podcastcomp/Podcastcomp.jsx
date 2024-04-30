import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import offerimage  from '../../assets/Rectangle 31.png'
import "./Podcastsaction.css"
import { CgCalendarDates } from "react-icons/cg";


const Podcastcomp = () => {
  return (
    <div>
      <div className="container mt-5">
      <h6 className='offer-header'>أخبار مميزة</h6>
        <div className="row">
      
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 Podcast_main">
            <div class="card border-0" >
              <img src={offerimage} class="podcast-img" alt="..." />
              <div class="card-body">
                <h5 className="Podcast_card_desk">أصوات مرفوعة: نسيج من الاحتجاجات</h5>
                <p  className="Podcast_card_para">شارك شخصان في تسجيل بودكاست مفعم بالحيوية، يتبادلان
                      الأفكار في مكان تلتقي</p>
                <p className="Podcast_card_date">
                14 أبريل 2024
                  <span className="calender-icon">
                    <CgCalendarDates />
                  </span>
                </p>
           
              </div>
            </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 Podcast_main">
            <div class="card border-0" >
              <img src={offerimage} class="podcast-img" alt="..." />
              <div class="card-body">
                <h5 className="Podcast_card_desk">أصوات مرفوعة: نسيج من الاحتجاجات</h5>
                <p  className="Podcast_card_para">شارك شخصان في تسجيل بودكاست مفعم بالحيوية، يتبادلان
                      الأفكار في مكان تلتقي</p>
                <p className="Podcast_card_date">
                14 أبريل 2024
                  <span className="calender-icon">
                    <CgCalendarDates />
                  </span>
                </p>
           
              </div>
            </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 Podcast_main">
            <div class="card border-0" >
              <img src={offerimage} class="podcast-img" alt="..." />
              <div class="card-body">
                <h5 className="Podcast_card_desk">أصوات مرفوعة: نسيج من الاحتجاجات</h5>
                <p  className="Podcast_card_para">شارك شخصان في تسجيل بودكاست مفعم بالحيوية، يتبادلان
                      الأفكار في مكان تلتقي</p>
                <p className="Podcast_card_date">
                14 أبريل 2024
                  <span className="calender-icon">
                    <CgCalendarDates />
                  </span>
                </p>
           
              </div>
            </div>
            </div>

        </div>
      </div>
   
    </div>
  )
}

export default Podcastcomp
