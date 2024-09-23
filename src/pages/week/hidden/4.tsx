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
      moduleTitle='Week 4: UX + Design Thinking: Usability Testing &amp; Mid-Fidelity Prototyping' 
      activitiesHeader="Mid-Fidelity Prototyping" 
      activitiesLink="https://drive.google.com/drive/folders/1BF8PQUURNcnY9Zqh9yj1SJ3_rOG_C-FW"
      day1Activities={["https://drive.google.com/drive/folders/1Ygd2c1cTUWcxtjf6xgWDA52mF_R0tMfL",
      "04.1-01-User-Testing-Plan-Guerrilla-Remote-Moderated", 
      "04.1-02-User-Testing-Guerrilla-Remote-Moderated", 
      "04.1-03-User-Testing-Analysis-Guerrilla-Remote-Moderated",
      ]}
      day2Activities={[
        "https://drive.google.com/drive/folders/1wCiEX2pTyXF-cs8iz9McBTOMcGAAXgGJ",
        "04.2-01-iOS-Wireframes-Activity",
        "04.2-02-Android-Wireframes-Activity",
        "04.2-03-Mid-Fidelity-Mobile-Clickable-Prototype"

      ]
      }
      day3Activities={[
        "https://drive.google.com/drive/folders/1QQcFdcflzc4rGGFmYrHE97-UNQf0ygHb",
        "04.3-01-Usability-Testing-Plan",
        "04.3-02-Usability-Testing"
      ]
      }
      slidesLinks={[
       `https://docs.google.com/presentation/d/e/2PACX-1vTEvJj83SzR4S9pYqREumhj17EMLDsJx4zF4NGJMfT-y2hM8aA9GA7P_L3HCKfCJ6NmkLPCEcI-ek5Z/embed?start=false&loop=false&delayms=300`,
       `https://docs.google.com/presentation/d/e/2PACX-1vSq3Pa1Lfqx9Ij-8XfO_BOiaTlHJhxFmYY-yM9tuqJYyNnzRR_aX-eA4oBFswyp5tuEV6P8tLeaQkF3/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vSdneu-9um2I2OW8alOWHyKbvNjWuJGxqG8k-qv25-C9UYaJFpHh5kM6Njqiv0UT-IroL3p1G9Fd09Z/embed?start=false&loop=false&delayms=3000`

      ]}
      slideURL="https://drive.google.com/drive/folders/1STGea0zwJ-l6_ZOPeEdtyxX7g2VvwhPY?usp=sharing" 
      moduleChallenge='User story: For this assignment, you’ll act as a UX designer who needs to iterate a prototype and test your solution for usability issues.'
      challengeDeliverables='
      Required Deliverables: 
      Cover slide     |    &nbsp;
Project overview 
Note: Your cover slide can contain your project overview, or you can put your project overview on its own slide. | &nbsp; &nbsp;
Include slides from Homework 1–3 in your case study covering the design thinking process. |  &nbsp;
Empathize 
Define
Ideate
Prototype 
Test (this week’s focus)  |  &nbsp;
User testing plan and notes |  &nbsp;
Links to two or more user test recordings |  &nbsp;
Digital iOS or Android UX wireframes |  &nbsp;
A link to your clickable Figma or Adobe XD prototype. |  &nbsp; An analysis of your guerrilla user testing results |  &nbsp;
2x2 matrix
'
       moduleChallengeLink='https://docs.google.com/document/d/1xECd3ucvXpkUEjJOat4YvWKeu2eatU9OGMvS0pY3c08/edit'
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
