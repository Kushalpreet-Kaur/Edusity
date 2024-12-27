import React from 'react'
import'./Programs.css'
import program_1 from '../../assets/edusity_assets/program-1.png'
import program_2 from '../../assets/edusity_assets/program-2.png'
import program_3 from '../../assets/edusity_assets/program-3.png'
import program_icon_1 from '../../assets/edusity_assets/program-icon-1.png'
import program_icon_2 from '../../assets/edusity_assets/program-icon-2.png'
import program_icon_3 from '../../assets/edusity_assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs' >
        <div className='program'>
            <img src={program_1} alt="" />
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Graduation Degree</p>
              <p className='degree'>A graduation degree is the culmination of years of dedication, marking the beginning of a new chapter filled with endless possibilities.</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt="" />
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <p>Masters Degree</p>
              <p className='degree'>Our master's degrees reflect a pinnacle of academic achievement, equipping graduates with the expertise and vision to lead in their respective fields.</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt="" />
            <div className="caption">
              <img src={program_icon_3} alt="" />
              <p>Post Graduation Degree</p>
              <p className="degree">
              Our postgraduate degrees embody advanced expertise, empowering graduates to drive innovation and shape the future of their industries.
              </p>
            </div>
        </div>

    </div>
  )
}

export default Programs