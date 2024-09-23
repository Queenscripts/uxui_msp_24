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
      moduleTitle='Week 8: Introduction to User Interface' 
      activitiesHeader="Case study work" 
      activitiesLink="https://drive.google.com/drive/folders/1rasAvaa1FlIn5y9WXA2lxQ6Prd0nMMTl"
      day1Activities={[
        "https://drive.google.com/drive/folders/1Nhnv_gf0ssae4GK-arjP18VbDjgFThnF",
      "08.1-01-Government-Agency-Selection", 
     "08.1-02-Heuristic-Evaluation",
     "08.1-03-UI-Accessibility",
     "08.1-04-UI-Pattern-Analysis"
    
      ]}
      day2Activities={[
        "https://drive.google.com/drive/folders/1fpWlIcC5zFeixYs6tZgdNE2hh1E7CGoC",
        "08.2-01-Brand-Inspiration-Moodboard-Activity",
        "08.2-02-Design-Principles-Moodboard",
        "08.2-03-Color-Palette",
        "08.2-04-Government-Color-Palette"
      

      ]
      }
      day3Activities={[
        "https://drive.google.com/drive/folders/1sPGjbsVSufZUPl7QhEqS8QW4CaIy5ai2",
        "08.3-01-Lazy-Dog-Type-Samples-Matrix",
        "08.3-02-Type Styles and Hierarchy Practice",
        "08.3-03-UI-Grid-Creation-Layout-Challenge-Activity-Instructions",
        "Bonus - 08.3-05-UI-Grid-Layout-Overlay"
      
      ]
      }
      slidesLinks={[
       `https://docs.google.com/presentation/d/e/2PACX-1vR8eIGBNXA1fO1Ea_sc1xdVp6TEvYBZ5a5E54Ni7klzlNARIuxYynJYcBQRuEYPWcCydWiYF30OVvxs/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vRlV7nNmhiDDc1ojugXqqE7vdFQvcIl1hwX0MFoJPJNTiWDOBEYbnqXA24rtEiQdY4ho6hl_Sf7xaQy/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vTAL9Lb2e-OCXMSi-anQy077rwVj8_syGGw_Mg2p_4kTf7ioFNlfaG0W8ZlQxjnMt9S2HDH5ZzizMH5/embed?start=false&loop=false&delayms=3000`
      ]}
      slideURL="https://drive.google.com/drive/folders/14OypTjFk3IcgR09sRK9cZJcIJOTpR3PC?usp=drive_link" 
      moduleChallenge='Government UI Design Analysis'
      challengeDeliverables='A Google Slides presentation with the following sections:
      Proto-persona
      Defined User Path
      Usability test interview notes, artifacts, images/recordings
      Google Drive with the following: 
      Heuristic evaluation notes and annotations
      InVision moodboard and assets
      Include work created in collaboration with your partner. 
      '
       moduleChallengeLink='https://docs.google.com/document/d/1YfhOHoch5cU5tPXyQTv-Zay8KOvVliddZjBI9GcQtQg/edit#heading=h.42t8v6ce4t60'
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
