import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';


const AboutPage = React.lazy(() => import('./About Page'));
const AboutPagePostEdit = React.lazy(() => import('./About Page/AboutPagePostEdit'));
const Facilities = React.lazy(() => import('./Facilities'));
const FacilitiesPostEdit = React.lazy(() => import('./Facilities/FacilitiesPostEdit'));
const Banner = React.lazy(() => import('./Banner'));
const BannerPostEdit = React.lazy(() => import('./Banner/BannerPostEdit'));
const Contact = React.lazy(() => import('./Contact'));
const ContactPostEdit = React.lazy(() => import('./Contact/ContactPostEdit'));
const AboutIndex = React.lazy(() => import('./About Index'));
const AboutIndexPostEdit = React.lazy(() => import('./About Index/AboutIndexPostEdit'));
const AboutVideo = React.lazy(() => import('./AboutVideoBanner'));
const AboutVideoPostEdit = React.lazy(() => import('./AboutVideoBanner/AboutVideoPostEdit'));
const NewsTitle = React.lazy(() => import('./News Title'));
const NewsTitlePostEdit = React.lazy(() => import('./News Title/NewsTitlePostEdit'));
const Service = React.lazy(() => import('./Service'));
const ServicePostEdit = React.lazy(() => import('./Service/ServicePostEdit'));
const Landmark = React.lazy(() => import('./Landmark'));
const LandmarkPostEdit = React.lazy(() => import('./Landmark/LandmarkPostEdit'));
const News = React.lazy(() => import('./News'));
const NewsPostEdit = React.lazy(() => import('./News/NewsPostEdit'));
const FeedbackTitle = React.lazy(() => import('./FeedBack Title'));
const FeedbacTitlePostEdit = React.lazy(() => import('./FeedBack Title/FeedBackTitlePostEdit'));
const Gallery = React.lazy(() => import('./Gallery'));
const GalleryPostEdit = React.lazy(() => import('./Gallery/GalleryPostEdit'));
const Rooms = React.lazy(() => import('./Rooms'));
const RoomsPostEdit = React.lazy(() => import('./Rooms/RoomsPostEdit'));


export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-page',
    element: <AboutPage/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-page/add',
    element: <AboutPagePostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/facilities',
    element: <Facilities/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/facilities/add',
    element: <FacilitiesPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner',
    element: <Banner/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner/add',
    element: <BannerPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/contact',
    element: <Contact/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/contact/add',
    element: <ContactPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-index',
    element: <AboutIndex/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-index/add',
    element: <AboutIndexPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-video',
    element: <AboutVideo/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-video/add',
    element: <AboutVideoPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/news-title',
    element: <NewsTitle/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/news-title/add',
    element: <NewsTitlePostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/service',
    element: <Service/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/service/add',
    element: <ServicePostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/landmark',
    element: <Landmark/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/landmark/add',
    element: <LandmarkPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/news',
    element: <News/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/news/add',
    element: <NewsPostEdit/>,
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/feedback-title',
    element: <FeedbackTitle/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/feedback-title/add',
    element: <FeedbacTitlePostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/gallery',
    element: <Gallery/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/gallery/add',
    element: <GalleryPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/rooms',
    element: <Rooms/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/rooms/add',
    element: <RoomsPostEdit/>,
  },
];
