
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
      moduleTitle='Weeks 16: Portfolio and Case Study Week' 
      activitiesHeader="Let's build those portfolios" 
      activitiesLink="https://drive.google.com/drive/folders/1loJySCvir5ePThTWjSFe7V2lkscHLm8S"
      day1Activities={[
        "https://drive.google.com/drive/folders/1HMPTtLiapvaCoGvEaAhTbd9YeK9xb3wc",
        "16.1-01-Portfolio-Inspiration",
        "16.1-02-UX-Portfolio-About-Me",
        "16.1-03-Case-Study-Inspiration",
        "16.1-04-Portfolio-Case-Study-Outline-Activity"
      ]}
      day2Activities={[
        "https://drive.google.com/drive/folders/1fQb2CNE9S7COxtfZITRl2RVTTDQf65NY",
        "16.2-01-Portfolio-Wireframe",
        "16.2-02-Portfolio-Case-Study-Wireframe",
        "16.2-03-60-120-Day-Job-Prep-Action-Plan",
        "16.2-04-My-Skills-Inventory"
      ]
      }
      day3Activities={[
        "https://drive.google.com/drive/folders/1djkPulFVC4SOYZMOHlbXuCWGQz3ee9Nq",
        "16.3-02-Design-Challenge-Activity",
        "16.3-03-FE-Dev-Software-Check-Activity",
        "16.3-04-GitHub-Repository-Activity"
      ]
      }
      slidesLinks={[
  `https://docs.google.com/presentation/d/e/2PACX-1vQ_O1YQxxfZsBbwv78kJk8OBBOJfx-fRPcehbw9lfN9Tj4PYs0MjncA5PSph3ry73g5VGwS4FjhveZT/embed?start=false&loop=false&delayms=3000`,
  `https://docs.google.com/presentation/d/e/2PACX-1vQM6iIpGXU7s-HjTP_1EYR0EfiGUPn8W0_QIe7guh1586dH1FGoLHfO86TNtpubHo7AG0F3h7kJQEmv/embed?start=false&loop=false&delayms=3000`,
      `https://docs.google.com/presentation/d/e/2PACX-1vR-myfiZkw_Aw8YJ_0WTOXP7cx6jZAEMl24z4Uh0XzKPrY0qxNwmS0yRHafKkGWR15fT_MjqphfiZhX/embed?start=false&loop=false&delayms=3000`
        ]}
      slideURL="https://drive.google.com/drive/folders/1Y5t2VxtNn91aY4JQ10CE8QTlr81Xhx7h" 
      moduleChallenge='UX Design Portfolio and Job Prep'
      challengeDeliverables="A link to your 120-day action plan. | &nbsp;
      A link to your portfolio inspiration mood board| &nbsp;
      A link to your resume.| &nbsp;
      A link to your UX Portfolio Case Study Template.| &nbsp;
      A link to your personal style guide.| &nbsp;
      A link to a .png or .pdf file of your Desktop AND Mobile Portfolio Wireframes and/or Mockups.| &nbsp;
      "
       moduleChallengeLink='https://docs.google.com/document/d/1zCu1EOVi0bMrHJ-LGOmXSpeYdWc-3WNosb9mKTIBlgk/edit#heading=h.9xxaawr1gfb8'
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
