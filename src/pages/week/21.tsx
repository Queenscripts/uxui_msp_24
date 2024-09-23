
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
      moduleTitle='Weeks 21: Web Technologies & Final Project' 
      activitiesHeader="Let's finalize portfolios!" 
      activitiesLink="https://drive.google.com/drive/folders/1ru3KpqGd8kYm2Ay8h0Dc-uiyZO6qhuOW"
      day1Activities={[
  
        "https://drive.google.com/drive/folders/1dSyihV-S8EhaElj2wbm8hvoihAfy4WgW",
        "21.1-01 Evaluating Hosting Technologies",
        "21.1-02 Site Hosting Options Assessment Template",
      ]}
      day2Activities={[
        "https://drive.google.com/drive/folders/17PixbVAwIjhExQ5NdYxnAOZkmV4vfled",
        "21.2-01-Hiring Manager Proto-Persona Activity",
        "21.2-02-Measuring Your Design Portfolio’s Performance",
        "21.2-03-Set Up Google Analytics"
      ]
      }
      day3Activities={[
        "https://drive.google.com/drive/folders/1bYSDpYxwIQZ96izLlahNbpcki-ClpVUE",
        "21.3-Final Project Pitch Notes",
        "21.3-Final Project Outline Template (Make a Copy)",
      ]
      }
      slidesLinks={[
        `https://docs.google.com/presentation/d/e/2PACX-1vS3LK5J1fnzCPOZ3hU8OekvUd6aw4af-SzNC--ObdIBLEGHLTrtoSTnAm51SzhkmYgVUNrWAFWlJBFq/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vSRnWhWwg78Tm17lt6eoGOfXqAhJOgyGYKhuy_EZymH_F8_CYXNTAUNb_wD0VDWntZo76-wXsS-2EfN/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vRIdpqChJAX5dZHa30EyTXB1CbVwQioor1HGkDqxWQVmyy3jpp-6Lp_gLeuIh56zW89eGFD6XRa-s9Y/embed?start=false&loop=false&delayms=3000`
       
            ]}      
      slideURL="https://drive.google.com/drive/folders/1qKz1YerKxzipLiwJfE3UNzhjKfkqlTof?usp=drive_link" 
      moduleChallenge='Finalize your portfolio - deploy your sites!'
      challengeDeliverables="
      "
       moduleChallengeLink='https://docs.google.com/document/d/1PvH2yXy-M40wePu0-BlIx-KkA0H0KR-Iee1FFqKOwOg/edit#heading=h.ijfa06yoetmh'
    />


    </ProtectedRoute>


  )
}

export default One
