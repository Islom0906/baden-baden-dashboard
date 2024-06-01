import {FiInfo} from "react-icons/fi";
import {MdLocalHotel, MdMiscellaneousServices} from "react-icons/md";
import {BsFillImageFill} from "react-icons/bs";
import {TiContacts} from "react-icons/ti";
import {ImNewspaper} from "react-icons/im";
import {FaMapLocationDot} from "react-icons/fa6";
import {VscFeedback} from "react-icons/vsc";
import {GrGallery, GrServices} from "react-icons/gr";




const routesConfig = [
    {
        id: 'app',
        title: 'Sample',
        messageId: 'sidebar.sample',
        type: 'group',
        children: [

            {
                id: 'Rooms',
                title: 'Rooms',
                messageId: 'sidebar.rooms',
                type: 'item',
                icon: <MdLocalHotel/>,
                path: '/rooms',
            },
            {
                id: 'About',
                title: 'About',
                messageId: 'sidebar.about',
                icon: <FiInfo/>,
                type: 'collapse',
                children: [
                    // {
                    //     id: 'about-header',
                    //     title: 'about-header',
                    //     messageId: 'sidebar.sample.aboutHeader',
                    //     type: 'item',
                    //     path: '/about-header',
                    // },
                    {
                        id: 'about-page',
                        title: 'about-page',
                        messageId: 'sidebar.sample.aboutPage',
                        type: 'item',
                        path: '/about-page',
                    },
                    {
                        id: 'about-index',
                        title: 'about-index',
                        messageId: 'sidebar.sample.aboutIndex',
                        type: 'item',
                        path: '/about-index',
                    },
                    {
                        id: 'about-info',
                        title: 'about-info',
                        messageId: 'sidebar.sample.aboutVideo',
                        type: 'item',
                        path: '/about-video',
                    },
                ]
            },
            {
                id: 'News',
                title: 'News',
                messageId: 'sidebar.news',
                icon: <ImNewspaper/>,
                type: 'collapse',
                children: [
                    {
                        id: 'news',
                        title: 'news',
                        messageId: 'sidebar.sample.news',
                        type: 'item',
                        path: '/news',
                    },
            //         {
            //             id: 'news-banner',
            //             title: 'news-banner',
            //             messageId: 'sidebar.sample.newsBanner',
            //             type: 'item',
            //             path: '/news-banner',
            //         },
                        {
                        id: 'news-title',
                        title: 'news-title',
                        messageId: 'sidebar.sample.newsTitle',
                        type: 'item',
                        path: '/news-title',
                    },
                ]
            },

            {
                id: 'feedbackTitle',
                title: 'feedbackTitle',
                messageId: 'sidebar.sample.feedbackTitle',
                type: 'item',
                icon: <VscFeedback/>,
                path: '/feedback-title',
            },
            {
                id: 'landmark',
                title: 'landmark',
                messageId: 'sidebar.sample.landmark',
                type: 'item',
                icon: <FaMapLocationDot/>,
                path: '/landmark',
            },
            {
                id: 'contact',
                title: 'contact',
                messageId: 'sidebar.sample.contact',
                type: 'item',
                icon: <TiContacts/>,
                path: '/contact',
            },
            {
                id: 'gallery',
                title: 'gallery',
                messageId: 'sidebar.sample.gallery',
                type: 'item',
                icon: <GrGallery/>,
                path: '/gallery',
            },
            {
                id: 'banner',
                title: 'banner',
                messageId: 'sidebar.sample.banner',
                type: 'item',
                icon: <BsFillImageFill/>,
                path: '/banner',
            },
            {
                id: 'facilities',
                title: 'facilities',
                messageId: 'sidebar.sample.facilities',
                type: 'item',
                icon: <GrServices/>,
                path: '/facilities',
            },
            {
                id: 'service',
                title: 'service',
                messageId: 'sidebar.sample.service',
                type: 'item',
                icon: <MdMiscellaneousServices/>,
                path: '/service',
            },
        ],
    },
];
export default routesConfig;
