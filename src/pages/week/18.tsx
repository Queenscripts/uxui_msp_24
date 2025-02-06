
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
      moduleTitle='Weeks 18: Portfolio and Case Study Week' 
      activitiesHeader="Let's build those portfolios" 
      activitiesLink="https://drive.google.com/drive/folders/1loJySCvir5ePThTWjSFe7V2lkscHLm8S"
      day1Activities={[
        "https://drive.google.com/drive/folders/1lN8oggFgzdCvsgXPfIZvNfBVvJlVQimu",
        "18.1-01 Portfolio Analysis",
        "18.1-01 Portfolio Analysis Notes",
        "18.1-02 Case Study Planning",
        "18.1-02 Case Study Planning Sheet"
      ]}
      // day2Activities={[
      //   "https://drive.google.com/drive/folders/1slCiYtjVA2O93hWPgZ5aRBrj7FdUT9C5",
      //   "18.2-01 Mock Interview",
      //   "18.2-01 Skills Tracker",
      //   "18.2-02 Skills Inventory Iteration",
      // ]
      // }
      // day3Activities={[
      //   "https://drive.google.com/drive/folders/1Iyn76CpOvlJs9RBLr7g4eZKZi_YvlpiY",
      //   "18.3-01 Whiteboard Exercise",
      // ]
      // }
      slidesLinks={[
  `https://docs.google.com/presentation/d/e/2PACX-1vSPxzx3QL0IpV4EHmaSRGVQvUkIY4KQ13IUBk7Nl2LbKkAT5oi8r0rvqTy-X_5uo9nX8qTJZcfXScFG/embed?start=false&loop=false&delayms=10000`,
  // `https://docs.google.com/presentation/d/e/2PACX-1vSsmtzd-GViIbFn8au18Fq3PZfvLVe4ZezC_-TkfONpcE5cPhtt89gb1jxKMiiSVieXUDsXIzGxpmM1/embed?start=false&loop=false&delayms=10000`,
  //     `https://docs.google.com/presentation/d/e/2PACX-1vQ1sLABmtMV48fPf0QkzNzVNYnsHG1-juthe2c0RfUWlmu2uTPAuN8icFKn3H9s7R1ObrgKnana8sk6/embed?start=false&loop=false&delayms=10000`
        ]}
      slideURL="https://drive.google.com/drive/folders/1a4ZV_8ZMMShuFWrjjwCDQ8YtUh-063F4" 
      moduleChallenge='UX Design Portfolio and Job Prep'
      challengeDeliverables="For this Design Challenge, you&lsquo;ll create mock-ups of your professional portfolio website. As you&lsquo;ve learned in this module, a portfolio is the standard tool that UX/UI designers use to showcase their skills and experience."
       moduleChallengeLink='https://docs.google.com/document/d/1FUHQ1JBInU5pIykSukPmJgRBScNX86E2ST-gBpPLiSA/edit?tab=t.0'
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
