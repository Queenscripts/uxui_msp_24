
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
