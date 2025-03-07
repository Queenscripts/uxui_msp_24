
// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

import CardNavigation from 'src/views/cards/CardNavigation'
import ProtectedRoute from 'src/components/ProtectedRoute'
import React from 'react'
const One = () => {
  return (
    <ProtectedRoute>
       <CardNavigation 
      moduleTitle='Weeks 21:Portfolio Interviews & Final Project' 
      activitiesHeader="Let's finalize portfolios!" 
      activitiesLink="https://drive.google.com/drive/folders/1ru3KpqGd8kYm2Ay8h0Dc-uiyZO6qhuOW"
      day1Activities={[
  
        "https://drive.google.com/drive/folders/1XnXj3jt8Dq5xZmGvHXA4ikwBHHjxeN8e",
        "21.1-01 Structured Feedback",
        "21.1-02 Pitch Planning",
        "21.1 Pitch Night Sign-Up",
      ]}
     
      day3Activities={[
        "https://drive.google.com/drive/folders/1Kf9ajdEkLR6qqnnJrc7NYIDUcrf_5URA",
        "21.3-Final Project Outline",
        "21.3-Final Project Pitch Notes",
      ]
      }
      slidesLinks={[
        `https://docs.google.com/presentation/d/e/2PACX-1vSKF9USDDRrSpp6k2goeWOsSbcdafZOrOB95PJRC-DnQuVhyGM7-FeCZRrJcYNHeaObUaAcrYDcvpxO/embed?start=false&loop=false&delayms=10000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vRsARZhrVRFqveUiiU3FKxCExzLbwDn-HrABEDNKnJZSk4sRE15E-5ouPJe36mtImazgPeNttkq4sf5/embed?start=false&loop=false&delayms=10000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vTfv64csgBvUvTzcu6QGNwFs1hH1q-2M_uOg3zYVQWdMp4O8Tatfv9ZAnHK6CIge_XWS39puS9jrSyz/embed?start=false&loop=false&delayms=10000`
            ]}      
      slideURL="https://drive.google.com/drive/folders/1anv0mUPCZEpo1v_74jtvRyLATucu0hZK?usp=sharing" 

    />


    </ProtectedRoute>


  )
}

export default One
