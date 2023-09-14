import React from "react";
import footerStyles from "../Footer/Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={`text-white py-5   ${footerStyles.bg_foot}`}>
        <div className="container ">
          <div className="row gy-5 gy-lg-0 ">
            <div className="col-lg-4 text-center">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
              
            </div>

<div className="col-lg-4  ">
<h2 className="text-center">
AROUND THE WEB

</h2>
<div className="footer_icons d-flex justify-content-center gap-4">


<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-solid fa-link"></i>
<i class="fa-solid fa-globe"></i>


</div>


</div>

<div className="col-lg-4  text-center">


  <h2>ABOUT FREELANCER
</h2>
<p>Freelance is a free to use, licensed <br /> Bootstrap theme created by Route

</p>
</div>


          </div>
        </div>
       
      </footer>
      <p className={ `mb-0   text-white mb-0 py-4 text-center  ${footerStyles.bg_copy}`}>Copyright © Your Website 2021</p>
     
    </>
  );
}
