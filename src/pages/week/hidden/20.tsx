
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
      moduleTitle='Weeks 20: Javascript Fundamentals' 
      activitiesHeader="Yay, more coding!" 
      activitiesLink="https://drive.google.com/drive/folders/1I_ZRtM2jVBWqqIZ1f6HQzcFJVecGk-hr"
      day1Activities={[
  
        "https://drive.google.com/drive/folders/1Y3F0UIoY0JOZdHtV4kz7fsCK-wjWqcEU",
        "20.1-01 Hello World Again",
        "20.1-02 JavaScript Variables",
        "20.1-03 Using jQuery",
        "20.1-04 Event Listeners",
      ]}
      day2Activities={[
        "https://drive.google.com/drive/folders/149BLRzjXG7_S2bRcs07BYLNxZW5hBr7A",
        "20.2-01 Writing Conditionals",
        "20.2-02 Conditional Clicks",
        "20.2-03 Simple Web App",
      ]
      }
      day3Activities={[
        "https://drive.google.com/drive/folders/1xUM7xW4az18EJOCQeTAtur_Vy95AGpgy",
        "20.3-01 Smart Accordion",
        "20.3-02 Animated Menu",
        "20.3-03 Preloader"
      ]
      }
      slidesLinks={[
        `https://docs.google.com/presentation/d/e/2PACX-1vQ2MW_k_6gHQJ1cn6mXVfuYMNuxxx7SHYil3jp85AzYyRjJxJFIyFv-t4ByUUmgKBZ1w-KQXmgy1sNi/embed?start=false&loop=false&delayms=10000`,
        // `https://docs.google.com/presentation/d/e/2PACX-1vQyHGwZIAvudjbWiBxewlsGaxBYJuQuwrLH6hcVJc9JfB5NHpXVxxVy1dWjZWVdjS2LTGmNl0UF3hjy/embed?start=false&loop=false&delayms=10000`,
        // `https://docs.google.com/presentation/d/e/2PACX-1vQv7HhLNlieVbcrU34suqgeU3pad_4v5WhcCPknGod5icOpgdZ1uBRpPumf5Ea-CuZbLFEr7SBbxo8i/embed?start=false&loop=false&delayms=10000`,
            ]}      
      slideURL="https://drive.google.com/drive/folders/1jwY9gERJn67O8auobitsrrVwVaaaRXGN?usp=sharing" 
      moduleChallenge='Presenting your Work '
      challengeDeliverables="
      This is the culmination of many weeks of work. You&lsquo;ve built your portfolio site and included your strongest case studies. You&lsquo;ve also gathered peer feedback and iterated the site based on the feedback. Next week you&lsquo;ll be presenting the strongest case study in your online design portfolio to the live class.

      "
       moduleChallengeLink='https://docs.google.com/document/d/1kr_uHxZKc11BDhlKnZ9lpyHm2lICmiehzzaM1X5kh8E/edit?tab=t.0#heading=h.bv6msf9tz0bm'
    />

    </ProtectedRoute>


  )
}

export default One
