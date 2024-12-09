
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
      moduleTitle='Week 11: Information Architecture' 
      activitiesHeader="UI Responsive Web Design and UI Testing" 
      activitiesLink="https://drive.google.com/drive/u/0/folders/1DCsWWDvdns20w-VVYQTtzqpLG5XF0iyL"
      day1Activities={[
"https://drive.google.com/drive/folders/10lwmuKMFlgLeqrMtoJvVrcnpXNnp-dcK",
"11.1-02 IA Analysis and Intervention",
"11.1-01 LATCH Analysis",

      ]}
//       day2Activities={[
// "https://drive.google.com/drive/folders/16IL-E9RmgOiM7qQcu9IPDwA4kMMtBXrt",
// "11.2-01-RWD-Website-Breakpoint-Activity",
// "11.2-02-RWD-Image-Cropping-Activity",
// "11.2-03-RWD-Homepage-WF-Challenge-Activity",
// "11.2-03.1-user-persona",
// "11.2-04-RWD-AB-Team-Testing-Activity"
//       ]
//       }
//       day3Activities={[
// "https://drive.google.com/drive/folders/12XKUXkXFxu9v4uu76KS9Qa_qc4s_SQqF",
// "11.3-01-Mobile-Blog-Mirror-Activity",
// "11.3-02-Mobile-Blog-Design-Test-Activity",
// "11.3-03-3-Goldilocks-3-Bears-Type-Test-Activity",
// "11.3-04-Define-UI-Typography-Styles-Activity",
// "11.3-05-RWD-Blog-Zeplin-Handoff-Activity"


      
//       ]
//       }
      slidesLinks={[
      `https://docs.google.com/presentation/d/e/2PACX-1vRjna6_u5NHhg4xaRgxvO31PicMGa0gxFtvRlYOlmVZwpQG1-7FNcRjrE51T6-J8zyCjzVOS95SGbgb/embed?start=true&loop=true&delayms=5000`
        ]}
      slideURL="https://drive.google.com/drive/folders/1LRigcSlsRsu9Qi2dCZZ5wc-NXyQ-Gkh2?usp=sharing" 
      moduleChallenge='Gulp Roast Coffee Bootstrap Design'
      challengeDeliverables='In this challenge, you will work on two pages for the Gulp Roast Coffee site in Bootstrap. You&apos;ll add content by selecting the best interactive component to present the information, customize the HTML for the component to convey semantic meaning, and assign classes to style and layout elements on the page. You&apos;ll also include responsive classes to present a mobile and desktop version of the site.
      '
       moduleChallengeLink='https://docs.google.com/document/d/1E-xXBKh_X8ozANVjwpu67g4tpEsb-mILikc6cB1yXQk/edit?tab=t.0'
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
