
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
      moduleTitle='Weeks 18: CSS Flexbox' 
      activitiesHeader="Let's CSS!" 
      activitiesLink="https://drive.google.com/drive/folders/1loJySCvir5ePThTWjSFe7V2lkscHLm8S"
      day1Activities={[
        "https://drive.google.com/drive/folders/1OlPR7WkX_7uc5IXhus4f_htHCIE4TpwA",
        "18.1-01-Your-First-Flex-Layout",
        "18.1-02-Aligning-Flex-Items",
        "18.1-03-Jake's Eatery"
      ]}
      day2Activities={[
      "https://drive.google.com/drive/folders/1UZbz-RXdSf6F4tJSqWn3q60yrgzY4E_9",
      "18.2-01-CSS-Grid-Layouts",
      "18.2-02-Extending-CSS-Grid",
      "18.2-03-Writing-Custom-Media-Query-Breakpoints"

      ]
      }
      day3Activities={[
       "https://drive.google.com/drive/folders/1AN_Q0YhWPveI5mmoWGfaOAJ7aQw_zTZr",
       "18.3-01-Rotations And Scaling",
       "18.3-02-CSS Transition Basics",
       "18.3-03-Creating CSS Keyframe Animations"

      ]
      }
      slidesLinks={[
  `https://docs.google.com/presentation/d/e/2PACX-1vRCYQkp7a_EM79FSI1V00GNLLReajVpQPAZ-07JLiK87x5aRI82bsUAM0qzXLetCnoumzfQO9qsA0fa/embed?start=false&loop=false&delayms=3000`,
  `https://docs.google.com/presentation/d/e/2PACX-1vQePYrJYifgHZcyPLVrXEGjF6o5vGwlCjyhoalvz3kE9uPdq0veG9j40X8aCvQPWBWMGbQtEilVP3H3/embed?start=false&loop=false&delayms=3000`,
  `https://docs.google.com/presentation/d/e/2PACX-1vSNe8u0nY_zBvLuxQuKypiMucY7ypdNYZn-cgfEH6fIV1i-ma_9NDY-36I9fSNSNTQY-cemdovlA6Hn/embed?start=false&loop=false&delayms=3000`
 
        ]}
      slideURL="https://drive.google.com/drive/folders/1a8Vv8lb3hMQTKDprgKvqOqeM5ELq0uWI?usp=sharing" 
      moduleChallenge='Finish your portfolio - Iterate on the code'
      challengeDeliverables="



      "
       moduleChallengeLink='https://docs.google.com/document/d/1Fd4hTrCtgg7Q4v60r5-rX8H2JD9FjP67PJxK5gs7G6U/edit#heading=h.fki8hq7kuztw'
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
