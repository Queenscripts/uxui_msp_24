
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
moduleTitle='Weeks 13-15: Group Project 2' 
activitiesHeader="Group Project Work Weeks 13-15" 
activitiesLink="https://drive.google.com/drive/folders/170yqzyV37z91kAQfqNM9eMtXShAKOCNB"
day1Activities={[
"https://docs.google.com/document/d/1iIFXD6Ht-AnkIKZOdRhiVP1Hau66MO6-t1T7xc-Tigg/edit",
"Group Project Proposal"
]}
day2Activities={[
  "https://docs.google.com/document/d/1iIFXD6Ht-AnkIKZOdRhiVP1Hau66MO6-t1T7xc-Tigg/edit",
  "User Research Focus: User research plan",
  "Proto persona",
  "User Flows",
  "User Journey Maps", 
  "User Scenarios"
]
}
day3Activities={[
  
]
}
slidesLinks={[
`https://docs.google.com/presentation/d/e/2PACX-1vTiUjjxxHDSaaQ3faVIlAst1ZnQ2sRVv2ZAnDvmU3l_4EYhPJG2ShkpBepvwSIW0-q6kWx7w-RTo001/embed?start=false&loop=false&delayms=3000`,
`https://docs.google.com/presentation/d/e/2PACX-1vS1QJca3s3YERDyA5A8XsFD09FeWpAUzKSYt07G11Pgzrymmx5LhZMTvJNrShNSXhNr1GT7qD1pgHBa/embed?start=false&loop=false&delayms=3000`,
`https://docs.google.com/presentation/d/e/2PACX-1vSnzs0D68tcGDSYd5v-43ignqRarAkK5u5c3i4KYPq0FBrQr4BcWtw3H_tz_et6YQRQlgRt48NDa-FJ/embed?start=false&loop=false&delayms=3000`,
`https://docs.google.com/presentation/d/e/2PACX-1vQTX0GtUGtw7uLUFIltdHWek_HrED8NAfT6-tNMVDu0eWkyZk4HO4fMumIfbGzxcAxO2y6oDV6Zngtf/embed?start=false&loop=false&delayms=3000`,
`https://docs.google.com/presentation/d/e/2PACX-1vRWrjihqn7RlbVoFOsctHkMaVyEF3TgvE7TiwNrYqDXE2lootan6Z7bmmhTLSUV49mDUC0tB3alKGLv/embed?start=false&loop=false&delayms=3000`,
`https://docs.google.com/presentation/d/e/2PACX-1vRlByjQ_2La99hE9vPn-OuI68-_xV0Dr6IWML4F21ORYRl3S-Pbs0iVZuJvWoURCj9NSgn-DuRdDsbJ/embed?start=false&loop=false&delayms=3000`
  ]}
slideURL="https://drive.google.com/drive/folders/1Fdcou-UR04exgZ7O80Lsf2sO0W0rNnGv?usp=sharing" 
moduleChallenge=' GROUP PROJECT 2'
challengeDeliverables=""
 moduleChallengeLink='https://docs.google.com/document/d/1iSziofQczIYeMnffiqct51tfXv6Ew3f3fapIA2kDjkQ/edit#heading=h.wq205dykaa26'
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
