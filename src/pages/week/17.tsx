
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
      moduleTitle='Weeks 17: Front End Development' 
      activitiesHeader="Let's code!" 
      activitiesLink="https://drive.google.com/drive/folders/1loJySCvir5ePThTWjSFe7V2lkscHLm8S"
      day1Activities={[
        "https://drive.google.com/drive/folders/1Kl0gRKj1LNaNGjuiJdKZl6o3rjKF55AY",
        "17.1-01-Hello-World",
        "17.1-02-Semantic-Sandbox",
        "17.1-03-Add-Some-Color",
        "17.1-04-Style-Your-Page"
      ]}
      day2Activities={[
       "https://drive.google.com/drive/folders/14P5qyO0xlhxdKPCE7TMpWQZuwABw6XWQ",
       "17.2-01-Containers & Structure",
       "17.2-02-Apply The Box Model",
       "17.2-03-Style Our Styleguide",
       "17.2-04-Custom Fonts on your webpage"
      ]
      }
      day3Activities={[
        "https://drive.google.com/drive/folders/1eQt912ky0fi1w4tzx1C9RtGFcm9Ep9Dl",
        "17.3-01-Practice-With-CSS-Positioning",
        "17.3-02-CSS-Positioning-With-Relative-Absolute-and-Fixed-Positioning",
        "17.3-03-Build-a-One-Page-Website",
        "17.3-04-Upload-Your-Webpage-to-the-GitHub-Cloud"

      ]
      }
      slidesLinks={[
  `https://docs.google.com/presentation/d/e/2PACX-1vS5585e59sGn55oZwqxalL6QZonx_BMMcdOKIzff60bZcx6LsUuCEazoHqJKf6bsNGfHtbv5By_i0eh/embed?start=false&loop=false&delayms=3000`,
  `https://docs.google.com/presentation/d/e/2PACX-1vT7pa1-I2-YlkpNqp3JHHnU8sKESbcFJ0ehqkjjg5C57tq_NJahSHOw-4C7bhPnfzPRcIZW-17Bbm6i/embed?start=false&loop=false&delayms=3000`,
  `https://docs.google.com/presentation/d/e/2PACX-1vQD7kJ_VcrxcngR9NHVHkWFmk0XNXF2qcnJbaNiFrHrBcNh2Im5NjNbFEhRBUw8QdCJ0blrLDyLbhbg/embed?start=false&loop=false&delayms=3000`
        ]}
      slideURL="https://drive.google.com/drive/folders/1Fqbh6xM9lqKAj-Y920r2yRcJ5ZtUgd6Y?usp=sharing" 
      moduleChallenge='Code your portfolio homepage'
      challengeDeliverables="



      "
       moduleChallengeLink='https://docs.google.com/document/d/1qza5kjzQndXKbooropUxE4nefYfpg4FezHh24TzUmOY/edit#heading=h.hwjr88gjl9n2'
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
