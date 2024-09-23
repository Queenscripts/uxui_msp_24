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
      day1Activities={["https://drive.google.com/drive/folders/1l6O2rBoimwNmg3u13iymQqoRTW8DTllc",
      "03.1-01-User-Flow-Analysis", 
      "03.1-02-Sandwich-User-Flow-Challenge", 
      "03.1-03-User-Flow-Onboarding",
      ]}
      day2Activities={
        ["https://drive.google.com/drive/folders/1gaFakuTuk9un12K5pH9rhleLMCq92RZ8",
        "03.2-01-Competitor-Analysis","03.2-02-User-Flow-Mobile-App","03.2-03-Paper-Wireframes"
      ]
      }
      day3Activities={["https://drive.google.com/drive/folders/1Q3Gr_uivoJDUZKjW_6H0ndYwcEfI0m7-","03.3-01-Clickable-Prototype-and-Testing","03.3-02-UI-Design-Patterns","03.3-03-Digital-Wireframes"]
      }
      slidesLinks={[
       `https://docs.google.com/presentation/d/e/2PACX-1vTobaZF7w5M8l0kmjsudRPZzm9_P_iVCIoeR4ciozslIjTsvyp78wxf-vjoUCXwV24uaKwTMmuSj891/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vTDhVFKBMlkuXbmMSMyBnNiaz302YrFxbelhWkrw5FEFIYj-zs1jWapFIzZZBQgbtW0SfC5bQ_Dnec6/embed?start=false&loop=false&delayms=3000`,
       `https://docs.google.com/presentation/d/e/2PACX-1vT9QK4eAzb3m-RZgoTuRZtaSLXR40yZLxpggkW1_6k6L81JylxsKdG7sKSp4OetwVwKSsF2aX8ZyQ2m/embed?start=false&loop=false&delayms=3000`
      ]} 
      slideURL="https://drive.google.com/drive/folders/18Qi_OF21z1XS0u9pZwqm2i14Y9U0s8B6?usp=sharing" 
      moduleChallenge='User story: Last week, you worked as a UX researcher with the define and ideate phases of the design thinking process for the mobile app design challenge. 
      '
      challengeDeliverables='
      Required Deliverables: 
      Competitor analysis |
      User flow (or a PDF of your user flow) | 
      Wireframe sketches (photos) | 
      A link to your clickable low-fidelity InVision or Figma prototype |
      Digital wireframes |
      A link to you your clickable digital prototype (Figma or Adobe XD) | 
      A link to your Google Slide deck | 
A link to your Google Drive folder 

      '
       moduleChallengeLink='https://docs.google.com/document/d/1ZX_ZoWDh995z1YsSd-JllS2ROoOM1ZkR8-c8nXSoiZg'
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
