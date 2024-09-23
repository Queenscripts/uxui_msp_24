
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
moduleTitle='Week 9: Information Architecture' 
activitiesHeader="Case study work" 
activitiesLink="https://drive.google.com/drive/folders/1rasAvaa1FlIn5y9WXA2lxQ6Prd0nMMTl"
day1Activities={[
 "https://drive.google.com/drive/folders/1ppSEEegq5cR1cp3HpeVNr6RmWucvPXKp",
 "09.1-01-IA-LATCH-Activity",
 "09.1-02-IA-Analysis-Intervention-Activity"

]}
day2Activities={[
 "https://drive.google.com/drive/folders/1mMBdTgPXDPTigUH6kLppt2LjMLwdnUXY",
 "09.2-01-Card-Sort-Creation-Activity",
 "09.2-02-Open-Card-Sorting-Activity",
 "09.2-03-Card-Sorting-ReOrg-Activity",
 "09.2-04-Sitemap-Activity",
 "09.2-05-XD-UI-Navigation-Deskop-Activity"

]
}
day3Activities={[
  "https://drive.google.com/drive/folders/1ekHJOXAO9yuCctnfF0Kn2hKn42IeRe9M",
  "09.3-01-Analyze-UI-Style-Guide",
  "9.3-02-Brand-Positioning-Statement",
  "09.3-03-Brand-Voice-and-Tone-Matrix",
  "09.3-04-UI-Style-Tile-Challenge"


]
}
slidesLinks={[
 `https://docs.google.com/presentation/d/e/2PACX-1vS5tyU9kS6glwTtmtszD6npySYpRiEwTPMbI892BGn_Im-ofWM53SEs9jtI3HwNu4lRT45bgCq2aB5a/embed?start=false&loop=false&delayms=3000`,
 `https://docs.google.com/presentation/d/e/2PACX-1vSZSJO7B3KefCP6HTPJV4l92nnWtOaVCaUxG05Bo6sWedHFpKyyoE_PJzVOifoEXuJXHxUc6fBxrbgJ/embed?start=false&loop=false&delayms=3000`,
 `https://docs.google.com/presentation/d/e/2PACX-1vRLrkya7b8m20jDM-EyNiUAKXsVV4gPk5firjN39mkq9Ji2E1OlgzACzGxedQ9bAkguZPTHawVYR4IR/embed?start=false&loop=false&delayms=3000`
 
]}
slideURL="https://drive.google.com/drive/folders/1uMHfxUx1MT-FuGgiKtkRo6Qtr6gcnR83" 
moduleChallenge='IA and UI Navigation Prototype'
challengeDeliverables='A .png of annotated agency navigation 
Notes from your usability website navigation tests
A photo of your card sorting results 
A new sitemap .png image + link to Figma file
A .png image for new government agency navigation + link to Figma file      
'
 moduleChallengeLink='https://docs.google.com/document/d/1KRKItxH2dbV6SXOtWcgRTezwJ03qaJwX1i-CxBmbsZU/edit#heading=h.njdkdy3obbgm'
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
