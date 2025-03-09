// ** Icon imports
import Login from 'mdi-material-ui/Login'
import AccountBox from "mdi-material-ui/AccountBox"
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
// import Table from 'mdi-material-ui/Table'
// import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import PeopleIcon from '@mui/icons-material/People';
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
// import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
// import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
// import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
// import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Week 22-24:Final Group Project',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/22-24',
      openInNewTab: false
    },
    {
      sectionTitle: 'Previous Weeks'
    },
    {
      title: 'Week 21:Interview Prep',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/21',
      openInNewTab: false
    },
  

    {
      title: 'Week 20:Finalize Case Studies & Code',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/20',
      openInNewTab: false
    },

    {
      title: 'Week 19:Publish Your Portfolios',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/19',
      openInNewTab: false
    },

    {
      title: 'Week 18: Portfolios',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/18',
      openInNewTab: false
    },
    // {
    //   title: 'Week 17: Intro to Front End Development',
    //   subject:"11",
    //   icon: SchoolIcon,
    //   path: '/week/17',
    //   openInNewTab: false
    // },
    // {
    //   title: 'Week 16: Portfolio & Case Studies',
    //   subject:"11",
    //   icon: SchoolIcon,
    //   path: '/week/16',
    //   openInNewTab: false
    // },
    {
      title: 'Week 13-17: Nonprofit Group Project',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/13-17',
      openInNewTab: false
    },
    {
      title: 'Week 12: Advanced UI',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/12',
      openInNewTab: false
    },
    {
      title: 'Week 11: Responsive Web Design',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/11',
      openInNewTab: false
    },
    {
      title: 'Week 10: Responsive Design',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/10',
      openInNewTab: false
    },
    {
      title: 'Week 9: Web Dev Intro',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/9',
      openInNewTab: false
    },
    {
      title: 'Week 8: UI Design',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/8',
      openInNewTab: false
    },
    {
      title: 'Week 4-7: Group Project',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/4-7',
      openInNewTab: false
    },
    {
      title: 'Week 3: Low-Fi Prototyping',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/3',
      openInNewTab: false
    },
    {
      title: 'Week 2: UX + Design Thinking: Definition, Ideation, UX Storytelling',
      subject:"11",
      icon: SchoolIcon,
      path: '/week/2',
      openInNewTab: false
    },
    {
        title: 'Week 1: Introduction to UX Design: Empathy Phase',
        subject:"11",
        icon: SchoolIcon,
        path: '/week/1',
        openInNewTab: false
      },
      {
        sectionTitle: 'Profile'
      },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Meet your peers',
      icon: PeopleIcon,
      path: '/peers'
    },
        {
      sectionTitle: 'Important Links'
    },
        {
      title: 'BCS',
      icon: SchoolIcon,
      path: 'https://courses.bootcampspot.com/courses/4019',
      openInNewTab: true
    },
    {
      title: 'Career Services',
      icon: Login,
      path: 'https://sites.google.com/2u.com/careerservices-uxui/home',
      openInNewTab: true
    },
    {
      title:"Request a Tutor",
      icon: AccountBox, 
      path: "https://bootcampspot.instructure.com/courses/6348/external_tools/429",
      openInNewTab: true
    },
    {
      title: 'Zoom Meetings & Recordings',
      icon: VideoCameraFrontIcon,
      path: 'https://bootcampspot.instructure.com/courses/6348/external_tools/249',
      openInNewTab: true
    },
    {
      sectionTitle: 'Instructional Staff'
    },
    // {
    //   title: 'SSM: Kevin',
    //   icon: PrivacyTipIcon,
    //   path: 'mailto: ksun@bootcampspot.com',
    //   openInNewTab: true
    // },
    {
      title: 'Instructor: Queen',
      icon: LocalLibraryIcon,
      path: 'https://linkedin.com/in/queenshabazz',
      openInNewTab: true,
      subject: "teacher"
    },
    {
      title: 'TA: Omotola',
      icon: LocalLibraryIcon,
      path: 'https://www.linkedin.com/in/omotola-a-8a8762228',
      openInNewTab: true,
      subject: "TA"
    },
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },

  ]
}

export default navigation
