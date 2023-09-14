import React from 'react'
import notFoundStles from '../Notfound/Noyfound.module.css'
import notFoundImg from '../../assets/imgs/notfound.jpg'
export default function Notfound() {
  return (<>
  
  <section className={  `d-flex justify-content-center align-items-center ${notFoundStles.not_hight}`}>

<img className='w-50' src={notFoundImg} alt="" />




  </section>
  
  
  
  
  
  </>
    
  )
}
