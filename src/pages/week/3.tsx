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
const One = () => {
  return (
    <ProtectedRoute>
            <CardNavigation 
      moduleTitle='Week 3: UX + Design Thinking: Prototyping' 
      activitiesHeader="Low-Fi Prototyping" 
      activitiesLink="https://drive.google.com/drive/folders/1n1adXMc_NxnVIjk9nnc9FrhxbVtLBKMj"
      day1Activities={["https://drive.google.com/drive/folders/1pAc3fQ-bQopYKeCjPF2YX1xcZ0mqjkmT",
      "3.1-01 Sandwich User Flow", 
      "3.1-02 Paper Prototyping", 
      "3.1-03 Usability Testing",
      ]}
            // day2Activities={["https://drive.google.com/drive/folders/1oQO51aM-Qs3RfDJY7oZmOnB3c68BIVkL",
      //"03.2-01 Remote Usability Testing Plan","03.2-01 Remote Usability Testing Plan Template",
      //"03.2-02 Usability Testing", "03.2-03 Usability Testing Analysis", "03.2-03 UX Design Brief Template"]
      // }
      // day3Activities={
      //   ["https://drive.google.com/drive/folders/12AhtjEpI98FH-VlouEP7oVk5SCWlGX6d",
      //   "3.3-01 Mini Case Study","3.3-01 Mini Case Study Outline Template"
      // ]
      // }

      slidesLinks={[
       `https://docs.google.com/presentation/d/e/2PACX-1vTcppUsSuE9nzlp936wlXI8EtJEYfaF2FeuWbuxhaFX38IM14lg4KEg5681IG0j2YhiJCnTfG6xvF__/embed?start=true&loop=true&delayms=3000`,
      //  `https://docs.google.com/presentation/d/e/2PACX-1vTDhVFKBMlkuXbmMSMyBnNiaz302YrFxbelhWkrw5FEFIYj-zs1jWapFIzZZBQgbtW0SfC5bQ_Dnec6/embed?start=false&loop=false&delayms=3000`,
      //  `https://docs.google.com/presentation/d/e/2PACX-1vRbA6kApcXhGtoIFOM23Q2TlkKzkD-XYVcUPmYHiV9AROfy-c0bvys-p20wH8ofLOrxeAwZcAlvZHQT/embed?start=true&loop=true&delayms=3000`
      ]} 
      slideURL="https://drive.google.com/drive/folders/18Qi_OF21z1XS0u9pZwqm2i14Y9U0s8B6?usp=sharing" 
      moduleChallenge='User story: Last week, you worked as a UX researcher with the define and ideate phases of the design thinking process for the mobile app design challenge. 
      '
      challengeDeliverables='
      Cover slide
Project overview
Note: Your cover slide can contain your project overview, or you can put your project overview on its own slide.
Include slides from Challenges 1 and 2 in your case study covering the design thinking process.
Empathize
Define
Ideate
Prototype
Test
User testing plan and notes
Links to two or more user test recordings
Clickable paper prototype
Analysis of your guerrilla user testing results


      '
       moduleChallengeLink='https://docs.google.com/document/d/1WM594QTwHABI89m7iRx3QyEn_7dxRxTVBsfErImhFx4/edit'
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
