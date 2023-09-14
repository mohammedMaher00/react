import React from 'react'
import contactStyles from '../Contact/Contact.module.css'

export default function Contact() {
  return (<>
  <section id='contact' className={`d-flex justify-content-center align-items-center contact  p-0 ${contactStyles.con_hight}`} >
    <div className="container   ">

  <div className="contact_header d-flex flex-column align-items-center  ">
  <h2 className={`fs-1 fw-bolder  ${contactStyles.con_color}`}>CONATCT SECTION
</h2>

<p className='start_icon2'> <i style={{color:'#2c3e50'}} class='fa-solid fa-star'></i></p>

  </div>
  <div className="contact-form ">
<div className={`row mt-5  `} >

<div className=" offset-1  col-10 d-flex flex-column justify-content-center gap-5 ">
  <input placeholder='userName' type="text" className='form-control shadow-none border-0 border-bottom' />
  <input placeholder='userAge' type="number" className='form-control shadow-none border-0 border-bottom' />
  <input placeholder='userEmail' type="email" className='form-control shadow-none border-0 border-bottom' />
  <input placeholder='userPassword' type="password" className='form-control shadow-none border-0 border-bottom' />
 <div className="col-md-2 btn btn-success">send message</div>
</div>



</div>



    
  </div>



    </div>







  </section>
  
  
  
  
  </>
   
  )
}
