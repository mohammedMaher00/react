import React from 'react'
import aboutStyles from '../About/About.module.css'

export default function About() {
  return (<>
  
  <section id='about' className={`${aboutStyles.about} text-white d-flex justify-content-center align-items-center`}>

  <div className="about_inner container d-flex flex-column justify-content-center align-items-center gap-3 ">
  <h2 className='fs-1'>ABOUT COMPONENT</h2>

<p className='start_icon'> <i className="fa-solid fa-star"></i></p>


<div className="   d-flex align-items-center justify-content-center   gap-1">
<p className='text-center'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
<p className='text-center'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
</div>


  </div>



  </section>
  
  
  </>
    
  )
}
