
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
      moduleTitle='Weeks 19: jQuery' 
      activitiesHeader="Let's Javascript!" 
      activitiesLink="https://drive.google.com/drive/folders/1loJySCvir5ePThTWjSFe7V2lkscHLm8S"
      day1Activities={[
        "https://drive.google.com/drive/folders/1t3HAdP40Tqc-OtHbd9DzE7Tm5BEcxuTX",
        "19.1-01-Hello World...Again!",
        "19.1-02-Understanding Variables",
        "19.1-03-Using jQuery",
        "19.1-04-on Function",
        "19.1-05-Build a toggle"
      ]}
      day2Activities={[
      "https://drive.google.com/drive/folders/1NFlB_AOZv-6gqsU8r2a9kiDQeOfz4Bn_",
      "19.2-01-Using Conditionals",
      "19.2-02-Writing jQuery Conditionals",
      "19.2-03-To Do App"
      ]
      }
      day3Activities={[
     "https://drive.google.com/drive/folders/1qlPHllpE5_TTG_pF_uL3J0pZLyjCuZrb",
     "19.3-01-jQuery-smart-accordion",
     "19.3-02-jQuery-Drop-Down-Search",
     "19.3-03-jQuery-Preloader"
      ]
      }
      slidesLinks={[
  `https://docs.google.com/presentation/d/e/2PACX-1vTmsF9HoY6v00R-Ide9GU_W0lwDc-Mhg-enSzAfeSHP0yFAnKigxIDO2BO1daq3LF973cd3IrGlFG9W/embed?start=false&loop=false&delayms=3000`,
  `https://docs.google.com/presentation/d/e/2PACX-1vSPaWXjE4kvinJIWKwdESJ_LPUd--rcDR1jKSxjPLyZMBO3GadJTxmyKaFo-dJreTWByUPQrs_WmXi_/embed?start=false&loop=false&delayms=3000`,
  `https://docs.google.com/presentation/d/e/2PACX-1vS0DZnM-LbD3Uz--aUduST4fALQcjg6BkNISLWaLirI3qobDP2WzcBUMRz2oMDlVA-NoAWd-ZZxuZlH/embed?start=false&loop=false&delayms=3000`
        ]}
      slideURL="https://drive.google.com/drive/folders/1SgEhRRrLDpWsbwxB96_hyc0PQBi7YRhl?usp=drive_link" 
      moduleChallenge='Add interactivity to your portfolio code'
      challengeDeliverables="



      "
       moduleChallengeLink='https://docs.google.com/document/d/177QCHxeBkdwm_aXa-NqQWO4Zq-zfrDIroDUnDJRo9ek/edit#heading=h.2q1rejctsob6'
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
