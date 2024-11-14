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
        "https://drive.google.com/drive/folders/1zjg0HvRXoTiYvLROyGB-fSwgLgKSFp-1",
        "8.1-01 Assistive Technology", 
        "8.1-02 Usability Heuristic Scavenger Hunt",
        "8.1-03 Color Accessibility",
        "8.1-04 Usability Recommendations", 
        "8.1-04 Usability Recommendations Reference Guide"   
      ]}
      // day2Activities={[
      //   "https://drive.google.com/drive/folders/1fpWlIcC5zFeixYs6tZgdNE2hh1E7CGoC",
      //   "08.2-01-Brand-Inspiration-Moodboard-Activity",
      //   "08.2-02-Design-Principles-Moodboard",
      //   "08.2-03-Color-Palette",
      //   "08.2-04-Government-Color-Palette"
      

      // ]
      // }
      // day3Activities={[
      //   "https://drive.google.com/drive/folders/1sPGjbsVSufZUPl7QhEqS8QW4CaIy5ai2",
      //   "08.3-01-Lazy-Dog-Type-Samples-Matrix",
      //   "08.3-02-Type Styles and Hierarchy Practice",
      //   "08.3-03-UI-Grid-Creation-Layout-Challenge-Activity-Instructions",
      //   "Bonus - 08.3-05-UI-Grid-Layout-Overlay"
      
      // ]
      // }
      slidesLinks={[

        `https://docs.google.com/presentation/d/e/2PACX-1vTO8xbDZACWoOVWpbsbgEQ92V-s1uB5GLpwNMaLKs7Sxv50AnLoSWr5kBviE8S_eRPawlN7AJWX37D7/embed?start=true&loop=true&delayms=10000`
      ]}
      slideURL="https://drive.google.com/drive/folders/15bZKcnZ64WSWT0tNRsyk1lOcrnzwQa_N?usp=sharing" 
      moduleChallenge='Walk the Store: Heuristic Evaluations & Mini Case Study'
      challengeDeliverables='A link to your heuristic evaluation.
      \n
      A mini case study presentation.'
       moduleChallengeLink='https://docs.google.com/document/d/10i5j4gj2uuAIsNjgycN_CsYBUzWmd_grR6AzfqGGW-k/edit?tab=t.0'
       glossaryTerms={[
        {
          term: "Accessibility",
          definition:
            "the practice of making your websites usable by as many people as possible. This benefits those with disabilities as well as mobile users, or users with slow network connections.",
        },
        {
          term: "Color hue",
          definition:
            "a pure pigment—one without tint or shade (added white or black pigment, respectively).",
        },
        {
          term: "Color saturation (colorfulness)",
          definition:
            "the purity of color. It is determined by a combination of light intensity and how much the color is distributed across the spectrum of different wavelengths.",
        },

        {
          term: "Color value",
          definition:
            "the intensity of the light (i.e., how light or dark it is).",
        },
      
        {
          term: "Elements of design",
          definition:
            "the fundamentals of all design, including contrast, balance, emphasis, movement, white space, proportion, hierarchy, repetition, rhythm, pattern, unity, and variety. These elements work together to create a design that is aesthetically pleasing and optimizes the UX.",
        },

        {
          term: "Gestalt laws",
          definition:
            "rules that describe how the human eye perceives visual elements. These principles aim to show how complex scenes can be reduced to simpler shapes. They also aim to explain how the eyes perceive the shapes as a single, united form rather than the separate simpler elements involved. There are eight Gestalt principles:",
        },

        
      ]}
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
