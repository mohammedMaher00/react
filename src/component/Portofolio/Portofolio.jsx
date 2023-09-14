import React from 'react'
import portfStyles from '../Portofolio/Portofolio.module.css'
import img1 from '../../assets/imgs/poert1.png'
import img2 from '../../assets/imgs/port2.png'
import img3 from '../../assets/imgs/port3.png'

export default function Portofolio() {



  
 


  return (<>
  <section className={`mt-5 py-5 ${portfStyles.port_hight}`}>

  <div className="container   mt-5">
<div className="porto_header d-flex flex-column align-items-center  ">
  <h2 className={`fs-1 fw-bolder  ${portfStyles.porto_color}`}>PORTFOLIO COMPONENT

</h2>

<p className='start_icon2'> <i style={{color:'#2c3e50'}} class='fa-solid fa-star'></i></p>

  </div>

<div className="port_content">
<div className="row g-5 ">

<div className="col-md-6 col-lg-4  " data-bs-toggle="modal" data-bs-target="#exampleModal1">
 <div className="inner-card position-relative">
 <div className="port-img   ">
 <img className='w-100 rounded   ' src={img1} alt="" />
 </div>
<div className={`img-layer position-absolute top-0 bottom-0 start-0 end-0 rounded  ${portfStyles.layer_background}`}>
<div className='d-flex align-items-center justify-content-center text-white h-100'>
<i className="fa-solid fa-plus fa-5x"></i>
</div>

</div>




 </div>

</div>

<div className="col-md-6 col-lg-4 " data-bs-toggle="modal" data-bs-target="#exampleModal2">
 <div className="inner-card position-relative">
 <div className="port-img   ">
 <img className='w-100 rounded   ' src={img2} alt="" />
 </div>
<div className={`img-layer position-absolute top-0 bottom-0 start-0 end-0 rounded  ${portfStyles.layer_background}`}>
<div className='d-flex align-items-center justify-content-center text-white h-100'>
<i className="fa-solid fa-plus fa-5x"></i>
</div>

</div>




 </div>

</div>

<div className="col-md-6 col-lg-4 " data-bs-toggle="modal" data-bs-target="#exampleModal3">
 <div className="inner-card position-relative">
 <div className="port-img   ">
 <img className='w-100 rounded   ' src={img3} alt="" />
 </div>
<div className={`img-layer position-absolute top-0 bottom-0 start-0 end-0 rounded  ${portfStyles.layer_background}`}>
<div className='d-flex align-items-center justify-content-center text-white h-100'>
<i className="fa-solid fa-plus fa-5x"></i>
</div>

</div>




 </div>

</div>

<div className="col-md-6 col-lg-4  " data-bs-toggle="modal" data-bs-target="#exampleModal1">
 <div className="inner-card position-relative">
 <div className="port-img   ">
 <img className='w-100 rounded   ' src={img1} alt="" />
 </div>
<div className={`img-layer position-absolute top-0 bottom-0 start-0 end-0 rounded  ${portfStyles.layer_background}`}>
<div className='d-flex align-items-center justify-content-center text-white h-100'>
<i className="fa-solid fa-plus fa-5x"></i>
</div>

</div>




 </div>

</div>

<div className="col-md-6 col-lg-4 " data-bs-toggle="modal" data-bs-target="#exampleModal2">
 <div className="inner-card position-relative">
 <div className="port-img   ">
 <img className='w-100 rounded   ' src={img2} alt="" />
 </div>
<div className={`img-layer position-absolute top-0 bottom-0 start-0 end-0 rounded  ${portfStyles.layer_background}`}>
<div className='d-flex align-items-center justify-content-center text-white h-100'>
<i className="fa-solid fa-plus fa-5x"></i>
</div>

</div>




 </div>

</div>

<div className="col-md-6 col-lg-4 " data-bs-toggle="modal" data-bs-target="#exampleModal3">
 <div className="inner-card position-relative">
 <div className="port-img   ">
 <img className='w-100 rounded   ' src={img3} alt="" />
 </div>
<div className={`img-layer position-absolute top-0 bottom-0 start-0 end-0 rounded  ${portfStyles.layer_background}`}>
<div className='d-flex align-items-center justify-content-center text-white h-100'>
<i className="fa-solid fa-plus fa-5x"></i>
</div>

</div>




 </div>

</div>




</div>





</div>





</div>




  </section>
  
 



<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
  <img className='w-100 rounded   ' src={img1} alt="" />
  </div>
</div>

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
  <img className='w-100 rounded   ' src={img2} alt="" />
  </div>
</div>

<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
  <img className='w-100 rounded   ' src={img3} alt="" />
  </div>
</div>
  
  
  </>
   
  )
}
