
// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
// import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
// import Table from 'src/views/dashboard/Table'
// import Trophy from 'src/views/dashboard/Trophy'
// import TotalEarning from 'src/views/dashboard/TotalEarning'
// import StatisticsCard from 'src/views/dashboard/StatisticsCard'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import CardNavigation from 'src/views/cards/CardNavigation'
import ProtectedRoute from 'src/components/ProtectedRoute'
import React from 'react'
const One = () => {
  return (
    <ProtectedRoute>
     <CardNavigation 
      // moduleTitle='Weeks 20: Webflow' 
      moduleTitle='Weeks 20: Bootstrap' 
      activitiesHeader="Let's design some websites!" 
      activitiesLink="https://drive.google.com/drive/folders/1I_ZRtM2jVBWqqIZ1f6HQzcFJVecGk-hr"
      day1Activities={[
  
        "https://drive.google.com/drive/folders/1I_ZRtM2jVBWqqIZ1f6HQzcFJVecGk-hr",
        "20.1-01-Getting-started-with-Bootstrap",
        "20.1-02-Bootstrap-Navigation-Bars",
        "20.1-03-Add-Bootstrap-Containers-Rows-And-Columns",
        "20.1-04-Add-Bootstrap-Cards",
        "20.1-05-Bootstrap-Forms-and-Modals",
        "20.1-06-Extended Activity-Bootstrap-Components"
      ]}
      day2Activities={[
        "https://drive.google.com/drive/folders/13MhukwYtoE-fE6aeaIltQG0wyNM15rnm",
        "20.2-01-Webpage Funnel Customization: Part 1 - Navbar",
        "20.2-02-Webpage Funnel Customization: Part 2 - Jumbotron",
        "20.2-03-Webpage Funnel Customization: Part 3 - Cards",
        "20.2-04-Webpage Funnel Customization: Part 4 - Content",
        "20.2-05-Webpage Funnel Customization: Part 5  - Footer",
        "20.2-06-Iterate-On-Your-Funnel"
      ]
      }
      day3Activities={[
        "https://drive.google.com/drive/folders/1MHZ6U12EIapQ9EjsGARUug4EdxKUiqeB",
        "20.3-01-View-Statement-of-Work",
        "20.3-02-Preparing-Web-Assets",
        "20.3-03-Travel-California-Creative-Prompt"
      ]
      }
      slidesLinks={[
        `https://docs.google.com/presentation/d/e/2PACX-1vSyVmJfFlljQdx37SC14wG-SkXaaBayImR0awz4Ay9BnEOylGLSN08mkBkTFxcJ_xNjlebb9vorcnOY/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vTXTM7vp1w1DVT29FYdSS4m_U4tenKT84aol0dGL9K5Ug3hTNIaQHIZAyzAwVq9Ijd9Kq5exNDSxlL5/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vTwmoTwl0AyPSLyFBpha9wFYguA7yxKYiUULpTqNOQM6oxPbQonenghjQADDV-A1hGZhon40ivzZUdc/embed?start=false&loop=false&delayms=3000`
        // `https://docs.google.com/presentation/d/e/2PACX-1vRGONPX8Ry8jlhWcXYE2EO0pcKKMJSvwwu3Uqr6q48o2rpPfSn13IeNKKB5k_f5psnrsZlTidQ-8DIA/embed?start=false&loop=false&delayms=3000`,
        // `https://docs.google.com/presentation/d/e/2PACX-1vQXwJt5e_h2V4E7K_0_yJYt_BLZp2GZb2aPuH5OCrKP7G_wn4ohJ-DWlVI3bFt2e69mJWuG3a5mAGT2/embed?start=false&loop=false&delayms=3000`,
        // `https://docs.google.com/presentation/d/e/2PACX-1vTDP_ZyMn4G1ijlWov1Ik8GzPV5hr--Q5gfh5W1yM8U7X6J7tD3KdhCgFjMfULNibZ7yO-xUuFXAqNF/embed?start=false&loop=false&delayms=3000`
            ]}      
      slideURL="https://drive.google.com/drive/folders/1IoecD5t9_KgAo1P7ibTZDi-t93SS2fUQ?usp=sharing" 
      moduleChallenge='Finalize your portfolio'
      challengeDeliverables="
      "
       moduleChallengeLink='https://docs.google.com/document/d/1aNB9SdYV_NuTScgFlrDRqWhUongVRT3y7smTBR6u8LM/edit#heading=h.hwjr88gjl9n2'
    />

    </ProtectedRoute>


  )
}

export default One
