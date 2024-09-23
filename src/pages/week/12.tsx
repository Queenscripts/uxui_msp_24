
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
      moduleTitle='Week 12: Advanced UI and Interaction Design6 v ' 
      activitiesHeader="UI Responsive Web Design and UI Testing" 
      activitiesLink="https://drive.google.com/drive/u/0/folders/1DCsWWDvdns20w-VVYQTtzqpLG5XF0iyL"
      day1Activities={[
"https://drive.google.com/drive/folders/1sL1eIlEhPZLeSLnvQOpU4jQdqZPNxyrL",
"12.1-01-Hero-Interaction-Challenge-Activity",
"12.1-02-Hero-Space-Animation-Challenge-Activity",
"12.1-03-Transition-Animation-Challenge-Activity",
"12.1-04-Testing-Animation-Challenge-Activity",
      ]}
      day2Activities={[
        "https://drive.google.com/drive/folders/1YbtO0ociwiEZsGnmD38AkdeTFl0QBuqT",
        "12.2-01-Augmented-Reality-Prototype",
        "12.2-02-Smart-Watch-Prototype"
        
      ]
      }
      day3Activities={[
        "https://drive.google.com/drive/folders/1T9u_pWc8YOxNUdBjAnAIMilaKJibaO9s",
        "12.3-01-Multimodal-UX-Scenario-Storyboard-Challenge",
        "12.3-02-Multimodal-Clickable-Prototype-Challenge",
        "12.3-03-Multimodal-Prototype-User-Testing-Challenge"
      ]
      }
      slidesLinks={[
   `https://docs.google.com/presentation/d/e/2PACX-1vRt-dohFtyoG5N9_2Svq6KtkLOdcs8cSwL_5aGdC9JFjPHNnLk_uSuI3f9SObmAp6dra7VOELgI4D3a/embed?start=false&loop=false&delayms=3000`,
   `https://docs.google.com/presentation/d/e/2PACX-1vT6onQxRNqWqqNB0Qi5zu-QhePNpSD8yWb8AfNenr4FBe4y831n7VJcPnQ9eIS7zd43PlGnKmiWPUVK/embed?start=false&loop=false&delayms=3000`,
   `https://docs.google.com/presentation/d/e/2PACX-1vS2AGZq-jvFv13WhPnGEpBcnFkGtKScbAScr5bxglsSsJytixyO7m3JnQCZvxoI_MXLgOmXW790CqP4/embed?start=false&loop=false&delayms=3000`
        ]}
      slideURL="https://drive.google.com/drive/folders/1I-iiNWQwTrBlKBLpZTX9-ZVr_weBOnCp?usp=sharing" 
      moduleChallenge=' Government Agency Redesign
      and UI Redesign Case Study'
      challengeDeliverables='Google Slides containing the following: &nbsp;&nbsp;&nbsp;
      A link to your UI Case Study Redesign for Units 8–12. &nbsp;&nbsp;
      Combine all your Challenge slides into one deck. &nbsp;&nbsp;
      The case study should include all challenge deliverables for Units 8–12.&nbsp;&nbsp;
      Or a link to the case study online via Medium, Behance, personal website, etc.&nbsp;&nbsp;
      Google Drive folder containing the following:&nbsp;&nbsp;
      UI style guide: UI style tile, images usage, UI components, RWD navigation, and components for responsive wireframes. Include your tablet wireframes if you did the bonus step.&nbsp;&nbsp;
      Government agency webpage(s) for mobile and desktop design comps. Include your tablet compositions if you did the bonus step.&nbsp;&nbsp;
      Usability test documentation on your mobile high-fidelity clickable prototype with 7 - 10 users. &nbsp;&nbsp;
      
      '
       moduleChallengeLink='https://docs.google.com/document/d/1PwnAhmtiWhhPs6JfDSVH_qMfzYxPP5AN9-TuDIpL2To/edit#heading=h.sa6rdw9trruu'
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
