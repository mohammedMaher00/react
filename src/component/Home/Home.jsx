import React from 'react'

import homeSyles from '../Home/Home.module.css'
import hero from '../../assets/imgs/avataaars.svg'

export default function Home() {
  return (<>
  <main  className={ ` d-flex justify-content-center align-items-center text-white   ${homeSyles.home_hero}  `}>


<div className="heroInner d-flex flex-column justify-content-center align-items-center gap-3 ">
<img style={{width:'250px'}} src={hero} alt="" />
<h2 className='fs-1'>START FRAMEWORK</h2>

<p className='start_icon'> <i className="fa-solid fa-star"></i></p>
<p>Graphic Artist - Web Designer - Illustrator</p>

</div>

  </main>
  
  
  </>
   
  )
}
