
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
      moduleTitle='Week 10: Interaction Design, Atomic Design, and UI Styleguide Components' 
      activitiesHeader="Case study work" 
      activitiesLink="https://drive.google.com/drive/folders/1rasAvaa1FlIn5y9WXA2lxQ6Prd0nMMTl"
      day1Activities={[
"https://drive.google.com/drive/folders/19WVdGfNSNl1k_-oVJ958lnRfgRbo8oz8",
"10.1-01-IxD-5-Dimensions-of-Interaction-Activity",
"10.1-02-Capture-Interaction-Design-Activity",
"10.1-03-Micro-interaction-Prototype-Activity",
      ]}
      day2Activities={[
"https://drive.google.com/drive/folders/1Z_SyJO3Ukxdewzd4AGGCFI9hPrFhtgHP",
"10.2-01-Atomic-Organism-Redesign-Activity",
"10.2-02-InVision-Freehand-Wireframe-Activity",
"10.2-03-Material-Design-Mockup-Activity"

      ]
      }
      day3Activities={[
        "https://drive.google.com/drive/folders/1BPACjo0L7wbOqr4Td6dToHGL5UBZBr5w",
        "10.3-01-Multi-State-UI-Button-Activity",
        "10.3-02-UI-Form-Paper-Prototype-Activity",
        "10.3-03-Mobile-UI-Form-Prototype-Activity"
      
      
      ]
      }
      slidesLinks={[
       `https://docs.google.com/presentation/d/e/2PACX-1vQOrVbyHuSs57hpp6rQw6kHScsi90FNF0vfCiF_vZ3bcSy-uhLZl8xhLkAWhYKiXi5mHbxkN1MfyI9f/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vRHSfAfPGCEnGcWT-W1ujk_k4-xizcismtrKdTj3a0CbRqvYBzW8tz5SaSWoZ5-jOu5fFqxNMxg_LuM/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vRWFCszxQ8m-DtQhvAxStvYc8Ntm7sOpxonf7Eh4tb_h5vjYxdboPctXMRkCEKSnD6MJBX44IulMqJ6/embed?start=false&loop=false&delayms=3000`
      ]}
      slideURL="https://drive.google.com/drive/folders/1Uinmo7vhlmteqrYAnszOWR599BulVHbv?usp=sharing" 
      moduleChallenge='Homepage UI Design and Testing'
      challengeDeliverables='The .pngs of your homepage wireframes and header/footer navigation systems for your government agency homepage (desktop). |    &nbsp;
      A .png of the homepage redesign and navigation redesign (mobile and desktop).|    &nbsp;
      A Google Doc with a clickable prototype link (Figma, Adobe XD, or InVision).|    &nbsp;
      A video/photo of a five-second user test along with a .png of the homepage iteration based on your user test.|    &nbsp;
      A .png of your government agency UI style tile.      |    &nbsp;
      '
       moduleChallengeLink='https://docs.google.com/document/d/1CmZ00obugCnRVJHsW27yjhOwF3IjZduSYXtHqGfGrk4/edit#heading=h.qfe6jos9k9q1'
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
