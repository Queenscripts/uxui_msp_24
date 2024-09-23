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
      moduleTitle='Week 1: Introduction to UX Design: Empathy Phase ' 
      activitiesHeader="User Research +" 
      activitiesLink="https://drive.google.com/drive/folders/120XX0CZ-3juHAakyFJFQmeDc7ksfreyh?ths=true"
      day1Activities={["https://drive.google.com/drive/folders/1IZfTjelfcE0nqQmy1qVoK98RmZkoXRS8","1.1 Software Check Software Installation Resources", "01.1-01-Proto-Personas", "01.1-01.1-Proto-Persona-Template","01.1-02-Five-Whys-Method"]}
      day2Activities={["https://drive.google.com/drive/folders/1rt6m6ub_XBUBU-R1kpfAcaOkSQwjm4IM", "01.2-01-User-Interview", "01.2-01.1-User-Interview-Sample-Questions"]}
      day3Activities={["https://drive.google.com/drive/folders/1UuESoCLysownaLvgwpPyyxAZ5htyQEyr", "01.3-01-Affinity-Diagramming", "01.3-02-Empathy-Map", "01.3-03-User-Personas"]}
      resourceLink="https://docs.google.com/document/d/1BW24OJaV2WZrLBvS8u6G7-1skJ3tBJJYzIMcZtO6Azc/edit?usp=sharing"
      slidesLinks={[
        `https://docs.google.com/presentation/d/e/2PACX-1vQzTNv58zSkp3Tqll1jXuI6-AIUHDXAm2ml93emy3BdJJoMT_vB3Nram6S7CzvGv-q3A_diB40RJMAD/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vTr0xkDHE1JGsLpOtlPhNlP-D6LxSI8ipwPE7fP2k-9tpF0OGm4GfEVeZL76oZE5KWjHNSFsx67juPU/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vTOZH7N5QZ9Ft45CK0bRvQznfrHjoeByAsnXwDblLCc5N5kkgglGGDU-vXP41YE_V3nRL8KghjQxHj-/embed?start=false&loop=false&delayms=3000`
      ]} 
      slideURL="https://drive.google.com/drive/folders/1GZh2bmddPaX4phB7rtlkpXPBZQEe_P7d" 
      moduleChallenge='User story: This week, you’re a user researcher who wants to understand the pain points of how people plan to travel in the future, post-pandemic. You’ll conduct user tests in order to understand user pain points. From there, you’ll develop a user persona that draws from the affinity diagram and empathy map that you will also create.' moduleChallengeLink='https://docs.google.com/document/d/1n4-Iwekrtps5YXM1pOHHZMrH8kZwJ9bR4ONVXG0znP4/edit#heading=h.le6oyhw4uk5o'
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
