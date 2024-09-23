
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
      moduleTitle='Weeks 22-24:  Final Group Project' 
      activitiesHeader="Final Group Project Work!" 
      activitiesLink="https://drive.google.com/drive/folders/1hJA2hrSZBxK7xxP2shl0ic6kVjTiqqW_"
      day1Activities={[
  
        "https://docs.google.com/document/d/1TieLrmuQTvpW334lRt8ktQyIT9FckLgSbdCBP7vKgD4/edit",
        "Project 3 Proposal Doc",
      ]}
      day2Activities={[
        "https://docs.google.com/document/d/17_lusJ8g5BbBnfPu3q3sbu5ie9ZVrEoiGFMpF6dxyNA/edit",
        "Gantt Chart"
      ]
      }
      day3Activities={[
        "https://docs.google.com/document/d/1qS-y0hHAejaFFWIJILpiZ73m0mgz3Y3Y-ahaYYG3j6E/edit",
        "Front End Prototyping"
      ]
      }
      slidesLinks={[
        `https://docs.google.com/presentation/d/e/2PACX-1vSs4fWyxoLlxra9H7za34cxhpZcIQKkldPKIezqvlOsEPoKMyFSDQFP_ZyRyCx3ZEK0NkFYWsE8OmAK/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vRlatoiz46TSrXacL0qirHtLNox6GEXuu1aejxSJFI5vJGM0kR32LeNr0R354PmNWDx8tS3NSjM58dk/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vSFAkWqMVqyPUiV121z2fc_xh3XufxIEMPKFT7Sx1uRlCoBrC9F0MqQv_sCenjY6VIlk2bJJ51A4FO9/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vQV58xGouhnxTbNvN4Z4pE93jqiDWXGjWaWm7SHQ2uTD6-JaUPP7Mbek5-LN4bLWHUXm8CAtEB-yfJ2/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vSHqxw1YAPNvhU1uXVWkNIpueLpX-7qWn14ujD2z5mncSRrJY8oJOoi-tUWKbkYI4WwEupjg8FpjAbC/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vSIB30FoJHli91glDOl1i-nO7KPnl2Sgv2ez-1luq90uzJ5gi63U1DwwUaz8T7Re-KlcmSURas5XGag/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vQFGl86Fh1ZZXjSlNC78w4dWe8kn_CTRsMZ_yf7uxCXP1b43XmKkrkPKBwcWWa3nDf2SPv_uE1kWGHA/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vQNKUQfs62UwEzZJKlGatYtOubECbXgNxjmZsfEm6OC0eGA9aZeOtii_I537X8l6Uj3FR35id9ZnZzX/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vTwcmAMGcsvY_iqGi-MCajf2KesmUV_X2P6gE7DJzCqRHTcaX2tRLUN_5rovP4Zk_YbpeC-GZM_JNWF/embed?start=false&loop=false&delayms=3000`


       
            ]}      
      slideURL="https://drive.google.com/drive/folders/1fpz54_M0qowG_I6jwAX5NTocs6k_iKbz?usp=sharing" 
      moduleChallenge='Final Project Work'
      challengeDeliverables="
      Turn in your final project slides and work
      "
      //  moduleChallengeLink='https://docs.google.com/document/d/1PvH2yXy-M40wePu0-BlIx-KkA0H0KR-Iee1FFqKOwOg/edit#heading=h.ijfa06yoetmh'
    />


    </ProtectedRoute>


  )
}

export default One
