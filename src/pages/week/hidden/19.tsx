
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
      moduleTitle='Weeks 19: Publish Your Portfolios' 
      activitiesHeader="Let's Javascript!" 
      activitiesLink="https://drive.google.com/drive/folders/1loJySCvir5ePThTWjSFe7V2lkscHLm8S"
      day1Activities={[
        "https://drive.google.com/drive/folders/147oYLactwh4-CO3yL1T4jr_gREPlnWcn",
        "19.1-01 Hosting Technologies",
        "19.1-02 Portfolio Iterations",
       "19.1-03 Design Studio"
      ]}
      day2Activities={[
      "https://drive.google.com/drive/folders/1z7M0Nm2fcBRCGFIkcx9SGzdrptl2DQ6I",
      "19.2-01 Cognitive Walkthrough",
      "19.2-02 Professional Networking",
      "19.2-03 Design Studio"
      ]
      }
      day3Activities={[
     "https://drive.google.com/drive/folders/1VX4ebR_toJPOe1DtPgFFRsfVcPhp5QdL",
     "19.3-01 Hiring Manager Persona",
     "19.3-02 Design Portfolio KPIs",
     "19.3-03 Google Analytics"
      ]
      }
      slidesLinks={[
  `https://docs.google.com/presentation/d/e/2PACX-1vTi_wAWEEK_byPuhEFJq4VmIU7niEt1ziRvR_mKcmUEV1qVa-nODJGom6MuLxeCtgy6rtc8kXC9-U8U/embed?start=false&loop=false&delayms=10000`,
  `https://docs.google.com/presentation/d/e/2PACX-1vRIbgexDfQPKx7YTDK8a9pK06-o7EKFOJjJT8QBKErTJs0Rr5DrfAgtjRGi1nglF_Id88sU1P9B7iiG/embed?start=false&loop=false&delayms=10000`,
  `https://docs.google.com/presentation/d/e/2PACX-1vSLkMYOxiINNynso6qMnR-T4meoppxJOGYonhLrJPALdqh-dPtSeYWbB3tObtPtF7TQFB9tOU3yEohM/embed?start=false&loop=false&delayms=10000`
        ]}
      slideURL="https://drive.google.com/drive/folders/1Zin3_OzhU7bR_oa2jU-OfwXSB9QUoSC-?usp=sharing" 
      moduleChallenge='Publishing a Portfolio'
      challengeDeliverables="

You’ll take the portfolio you designed and build it into a live online portfolio site. To do this, you’ll assess site-hosting technologies. From there, you’ll choose the hosting technology that best fits the needs of your site. You’ll then take the first step toward site building, which is to set up the basic file structure for your site.

      "
       moduleChallengeLink='https://docs.google.com/document/d/18w1MdLpzDy3rmkaoVJqWYpOwdtnYCNutDy86Pu1RFxk/edit?tab=t.0'
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
