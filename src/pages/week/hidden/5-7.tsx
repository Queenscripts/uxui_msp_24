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
      moduleTitle='Week 5-7: Group Project + Case Study Week' 
      activitiesHeader="Case study work" 
      activitiesLink="https://drive.google.com/drive/folders/1BF8PQUURNcnY9Zqh9yj1SJ3_rOG_C-FW"
      day1Activities={["https://drive.google.com/drive/folders/1-mG9e13qJ8IfXVzRpkrcONIO4hALM5ja",
      "05.1-Case-Study-Outline-Activity", 
     "05.1-Case-Study-Outline-Template"
      ]}
      day2Activities={[
       "https://drive.google.com/drive/folders/1-mG9e13qJ8IfXVzRpkrcONIO4hALM5ja",
       "05.2-01-Group-Idea-Pitching-Activity",
       "05.2 - Group Project 1 Requirements"

      ]
      }
      day3Activities={[
        "https://drive.google.com/drive/folders/1-mG9e13qJ8IfXVzRpkrcONIO4hALM5ja",
        "05.3-01-Group Project One Proposal"
      ]
      }
      slidesLinks={[
       `https://docs.google.com/presentation/d/e/2PACX-1vQPIv0DUKtOlNhmJ81LLSldiU3wJBQgJpw_tOemSkVZtrsSrf6ZAKdi11886lciOk9rdzeLjQSnpdfN/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vTQ6tzCiTHfpmLm9mPKqAUcFarJnep6hjJW7oF6YVHt8c9mzcUX4DTT4sXtJO00B_enVFbyEy6bb1Ih/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vTF-2rkbt0t-QSAt-P41MHnXZFaQJMjSKTMEQZiLcbyQ8Xi-zMNmJ15aHpGadxOaMvY41y3naYp2WO2/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vRCfUTEGAtfLynRr6-dbiwPqyRHJtLPIhD15unPE5lnl-29dW3Mvc1Pib7uJmkZoFnkgdQug24FecXc/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vTHxUmwmRiddcN6JKhyMQeRwG0yx_wDiLgYq_JpeigT4-BE8JnC9JnvcQykWKbIq3w_ZYtxqCoeWDd1/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vTTQHq7sTQh6Tck8ziVZsZFBOtZSlFHmMw2YxOCQt9dJeTYpngbEVqr05e43lrw0zghOKQYQzSqoByk/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vTO5hsZTN5maPbbEQSh5A3gL47VD1NQ583uLBKts3hlwHYC4W8kttDv1cbpjpQ2078wzKVr8mm5NkkT/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vQ7qYVq_hCV624ZN1dheArMf1Ocb1URq5UKpFqorUh-sXd8nE1qFGU6q8k1h5E7nHDXKsj5FqFUdznS/embed?start=false&loop=false&delayms=3000`

      ]}
      slideURL="https://drive.google.com/drive/folders/1-mG9e13qJ8IfXVzRpkrcONIO4hALM5ja" 
      moduleChallenge=' No deliverable to turn in yet'
      challengeDeliverables='Keep working on your group project! '
      //  moduleChallengeLink='https://docs.google.com/document/d/1xECd3ucvXpkUEjJOat4YvWKeu2eatU9OGMvS0pY3c08/edit'
    />
    </ProtectedRoute>


    // <ApexChartWrapper>
    //   <Grid container spacing={6}>
    //     <Grid item xs={12} md={4}>
    //       <Trophy />
    //     </Grid>
    //     <Grid item xs={12} md={8}>
    //       <StatisticsCard />
    //     </Grid>
    //     <Grid item xs={12} md={6} lg={4}>
    //       <WeeklyOverview />
    //     </Grid>
    //     <Grid item xs={12} md={6} lg={4}>
    //       <TotalEarning />
    //     </Grid>
    //     <Grid item xs={12} md={6} lg={4}>
    //       <Grid container spacing={6}>
    //         <Grid item xs={6}>
    //           <CardStatisticsVerticalComponent
    //             stats='$25.6k'
    //             icon={<Poll />}
    //             color='success'
    //             trendNumber='+42%'
    //             title='Total Profit'
    //             subtitle='Weekly Profit'
    //           />
    //         </Grid>
    //         <Grid item xs={6}>
    //           <CardStatisticsVerticalComponent
    //             stats='$78'
    //             title='Refunds'
    //             trend='negative'
    //             color='secondary'
    //             trendNumber='-15%'
    //             subtitle='Past Month'
    //             icon={<CurrencyUsd />}
    //           />
    //         </Grid>
    //         <Grid item xs={6}>
    //           <CardStatisticsVerticalComponent
    //             stats='862'
    //             trend='negative'
    //             trendNumber='-18%'
    //             title='New Project'
    //             subtitle='Yearly Project'
    //             icon={<BriefcaseVariantOutline />}
    //           />
    //         </Grid>
    //         <Grid item xs={6}>
    //           <CardStatisticsVerticalComponent
    //             stats='15'
    //             color='warning'
    //             trend='negative'
    //             trendNumber='-18%'
    //             subtitle='Last Week'
    //             title='Sales Queries'
    //             icon={<HelpCircleOutline />}
    //           />
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid item xs={12} md={6} lg={4}>
    //       <SalesByCountries />
    //     </Grid>
    //     <Grid item xs={12} md={12} lg={8}>
    //       <DepositWithdraw />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Table />
    //     </Grid>
    //   </Grid>
    // </ApexChartWrapper>
  )
}

export default One
