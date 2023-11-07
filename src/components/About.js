//import {TeamMembers} from './components/TeamMembersArray'
import imgAbout from "../assets/AboutUs.jpeg"
import imgCollective from "../assets/CollectiveCollab.jpeg"
import imgReact from "../assets/Reactjs.jpeg"
import imgRay from "../assets/Ray.jpeg"
import imgNoni from "../assets/Noni.jpeg"
import imgAngel from "../assets/Angel.jpeg"
import imgDennys from "../assets/Dennys.jpeg"
import { Link } from "react-router-dom";

export default function About({TeamMembers} )  {
    //const member =  TeamMembers.map((memberInfo) => memberInfo);
    //console.log(TeamMembers);
    //return member;

    return (
<>
 <div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">About us page</h1>
        <p className="lead text-muted mb-0">Powered through Pursuit we collaborated & combined our computer science engineering skills to present to you our Youtube Project   .</p>
        
        
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src={imgAbout} alt="" className="img-fluid"/></div>
    </div>
  </div>
</div>

<div className="bg-white py-5">
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Collective Collaboration</h2>
        <p className="font-italic text-muted mb-4">One of the objectives of this project was to demonstrate our ability to work together in a harmonious, cohesive & team environment.  We had to create workflows to streamline our efforts and effectively reach our goal post.</p>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={imgCollective} alt="" className="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto"><img src={imgReact} alt="" className="img-fluid mb-4 mb-lg-0"/></div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Technical Skills</h2>
        <p className="font-italic text-muted mb-4">This project demonstates the React.JS framework, which is an open-source JavaScript framework and library developed by Facebook.</p>
      </div>
    </div>
  </div>
</div>

<div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light">Our Team</h2>
        <p className="font-italic text-muted">We were a small but mighty team, here's insight on our individual contributions to this collective project.</p>
      </div>
    </div>

    <div className="row text-center">
      
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={imgRay} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Ray Russell</h5><span className="small text-uppercase text-muted">Instrumental In Designing About Page & CSS Styling</span>
          <Link to="https://github.com/RadiantRay22" className="btn btn-light px-5 rounded-pill shadow-sm">Find Me On Github</Link>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-facebook-f"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-twitter"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-instagram"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-linkedin"></i></Link></li>
          </ul>
        </div>
      </div>
      
      
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={imgAngel} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Angel Tirado</h5><span className="small text-uppercase text-muted">Instrumental in developing the single video functionality & module window. </span>
          <Link to="https://github.com/atiradoGit88" className="btn btn-light px-5 rounded-pill shadow-sm">Find Me On Github</Link>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-facebook-f"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-twitter"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-instagram"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-linkedin"></i></Link></li>
          </ul>
        </div>
      </div>
      

     
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={imgNoni} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Noni Porter</h5><span className="small text-uppercase text-muted">Instrumental in Routing React Links, Developing NavBar functionality, & Css Styling.</span>
          <Link to="https://github.com/Honeyx03" className="btn btn-light px-5 rounded-pill shadow-sm">Find Me On Github</Link>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-facebook-f"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-twitter"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-instagram"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-linkedin"></i></Link></li>
          </ul>
        </div>
      </div>
      

      
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={imgDennys} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Dennys Antunish</h5><span className="small text-uppercase text-muted"> Instrumental in developing search bar functionality & debugging.</span>
          <Link to="https://github.com/antunishdPursuit" className="btn btn-light px-5 rounded-pill shadow-sm">Find Me On Github</Link>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-facebook-f"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-twitter"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-instagram"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="social-link"><i className="fa fa-linkedin"></i></Link></li>
          </ul>
        </div>
      </div>
      

    </div>
  </div>
</div>
</>
          )}

/* <section>
         <div className="aboutdiv"></div>
         <h2>About Us</h2> 
     <ul>
    </ul> {TeamMembers.map((member)=>{
     return (
     <li><span>{member.name}<br></br>  {member.about} <br></br>{member.role} <a href= {member.git}></a></span></li>
     
     )})} 
     </ul> 
    </section>);  */