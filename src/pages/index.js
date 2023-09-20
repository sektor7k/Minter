
import Page404 from "./404";
import About01 from "./About01";
import About02 from "./About02";
import Blog from "./Blog";

import BlogDetails from "./BlogDetails";

import Collection from "./Collection";
import CommingSoon from "./CommingSoon";

import Contact from "./Contact";

import Faq01 from "./Faq01"; 
import Faq02 from "./Faq02";


import Home01 from "./Home01";
import Home02 from "./Home02";
import Home03 from "./Home03";
import ItemDetails1 from "./ItemDetails1";
import ItemDetails2 from "./ItemDetails2";
import ItemDetails3 from "./ItemDetails3";
import ItemDetails4 from "./ItemDetails4";

import Login from "./Login";
import OurTeam from "./OurTeam";

import RoadMap01 from "./RoadMap01";
import RoadMap02 from "./RoadMap02";
import RoadMap03 from "./RoadMap03";
import SignUp from "./SignUp";
import Testimonials from "./Testimonials";




const routes = [
  { path: '/home-v1', component: <Home01 />},
  { path: '/', component: <Home02 />},
  { path: '/home-v3', component: <Home03 />},

  { path: '/about-v1', component: <About01 />},
  { path: '/about-v2', component: <About02 />},

  { path: '/roadmap-v1', component: <RoadMap01 />},
  { path: '/roadmap-v2', component: <RoadMap02 />},
  { path: '/roadmap-v3', component: <RoadMap03 />},

  { path: '/signin', component: <Login />},
  { path: '/signup', component: <SignUp />},
  { path: '/faq-v1', component: <Faq01 />},
  { path: '/faq-v2', component: <Faq02 />},
  { path: '/our-team', component: <OurTeam />},
  { path: '/collection', component: <Collection />},
  { path: '/testimonial', component: <Testimonials />},
  { path: '/item-details1', component: <ItemDetails1 />},
  { path: '/item-details2', component: <ItemDetails2 />},
  { path: '/item-details3', component: <ItemDetails3 />},
  { path: '/item-details4', component: <ItemDetails4 />},
  { path: '/comming-soon', component: <CommingSoon />},
  { path: '/page-404', component: <Page404 />},


  { path: '/blog', component: <Blog />},

  { path: '/blog-details', component: <BlogDetails />},

  { path: '/contact', component: <Contact />},



]

export default routes;