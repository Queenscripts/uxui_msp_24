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
      moduleTitle='Week 2: UX + Design Thinking: Definition, Ideation, UX Storytelling' 
      activitiesHeader=" Storytelling + User Research" 
      activitiesLink="https://drive.google.com/drive/folders/1n1adXMc_NxnVIjk9nnc9FrhxbVtLBKMj"
      day1Activities={["https://drive.google.com/drive/folders/1NgNqSXTwy7ykT1npP6PuQ76XBeKzSE83",
      "02.1-01-POV-User-Insight-Statements", 
      "02.1-02-How-Might-We-Statements", 
      "02.1-03-Problem-Statements",
      "02.1-04-User-Stories"]}
      day2Activities={
        ["https://drive.google.com/drive/folders/1BbVXB24QO_itbgQDjWgcoIcAmIQRD2TA","02.2-01-I like-I Wish-What If-Ideation","02.2-02-Feature-Prioritization","02.2-03-Value-Proposition-Statements"]
        // ["https://drive.google.com/drive/folders/1rt6m6ub_XBUBU-R1kpfAcaOkSQwjm4IM", "01.2-01-User-Interview", "01.2-01.1-User-Interview-Sample-Questions"]
      }
      day3Activities={["https://drive.google.com/drive/folders/1sHF4lUDP5XSdMucnMplN7ye2VSdWRi7s", "02.3-01-User-Scenarios","02.3-02-Storyboards","02.3-03-User-Journey-Maps"]
        // ["https://drive.google.com/drive/folders/1UuESoCLysownaLvgwpPyyxAZ5htyQEyr", "01.3-01-Affinity-Diagramming", "01.3-02-Empathy-Map", "01.3-03-User-Personas"]
      }
      // resourceLink="https://docs.google.com/document/d/1BW24OJaV2WZrLBvS8u6G7-1skJ3tBJJYzIMcZtO6Azc/edit?usp=sharing"
      slidesLinks={[
        `https://docs.google.com/presentation/d/e/2PACX-1vQTxs8gtYVzhxQwckc4-QWwlFS78T0XtB6L66xXNTUyHu3tUZPD-F6o_NivQYQjPcZzL6wae0J5wDXU/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vSFCDfktElkPME9Zk5MOLEQfBuExknzMiq6Q6AsfA9Atuj_w_T2WbJJDlPnsgw4ybpNGVsfZej8an2P/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vTkeY94ZoOA0o2VHIZ-jgtU4fvGOszq00mLPn3uqJ1BuN3y-ZNfRkM9rZi24Tw7IiG1hUwd09jXT7iR/embed?start=false&loop=false&delayms=3000`
        // `https://docs.google.com/presentation/d/e/2PACX-1vTOZH7N5QZ9Ft45CK0bRvQznfrHjoeByAsnXwDblLCc5N5kkgglGGDU-vXP41YE_V3nRL8KghjQxHj-/embed?start=false&loop=false&delayms=3000`
      ]} 
      slideURL="https://drive.google.com/drive/folders/1ykG-UvMUKNZSIfe-mHPIPtGbY-I-tK1I?usp=drive_link" 
      moduleChallenge='User story: In order to transform your research insights into meaningful next steps, you must know which tools will help you transform those insights. It’s time to put that user researcher hat back on and grab your user persona from last week. Your job is to use your user persona to create a problem statement, ideate on potential solutions, and then apply visual storytelling to create a narrative around the solution you’ve identified.'
      challengeDeliverables='
      Required Deliverables
      Google Slides presentation with the following sections:
      
      
      User insight statement
      Problem statement
      Brainstorm and ideation process documents
      Feature prioritization matrix
      Value proposition
      User scenario
      Storyboard
      User journey map
      Iterations and feedback documentation'
       moduleChallengeLink='https://docs.google.com/document/d/12M9HK5Xt-0sBQPBWejF1XW9BQhE1NGjlLLf6Laq6k4U/edit#heading=h.e90ml85suxb3'
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
