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
      moduleTitle='Week 4-7: Group Project + Case Study Week' 
      activitiesHeader="Case study work" 
      activitiesLink="https://drive.google.com/drive/folders/1BF8PQUURNcnY9Zqh9yj1SJ3_rOG_C-FW"
      day1Activities={["https://drive.google.com/drive/folders/1DzVkoc_BhaUIfsfLF7_4VASfh16A1VFE",
      "4.1-01 Setting Group Expectations", 
      ]}
      // day2Activities={[
      //  "https://drive.google.com/drive/folders/1MrL3MW5hkqYR4jJdZvjFQhUS-mly-9ub",
      //  "4.2-01 Empathy Development",
      // ]
      // }
      // day3Activities={[
      //   "https://drive.google.com/drive/folders/1-mG9e13qJ8IfXVzRpkrcONIO4hALM5ja",
      //   "05.3-01-Group Project One Proposal"
      // ]
      // }
      slidesLinks={[
       `https://docs.google.com/presentation/d/e/2PACX-1vSNdWRsmXn-9fPsQClGtq7qPT_hmlLTKNpfZQWSGS0nVLehI5JlZD98AtZ5kJ5BAs5pYG7oYfTpcHx2/embed?start=true&loop=true&delayms=3000`,


      //  `https://docs.google.com/presentation/d/e/2PACX-1vQkTK0ECIlFIvRLicHYGcEb6SI_lim3M2jIpFxVNdm6nzwch0FiWfB-sj9HzNj0VTOUS7w-Fgh-ftmA/embed?start=true&loop=true&delayms=3000`
      ]}
      slideURL="https://drive.google.com/drive/folders/1nC2h5jCnUe7dIgglNBcKV0-U6zog5e4X?usp=sharing" 
      moduleChallengeLink='https://docs.google.com/document/d/1MgFHz2QtCZQntY6kBboZUEVU3adiiFbsj3-7jBpdxRQ/edit?tab=t.0'
      challengeDeliverables='Wicked Problem Research'
      glossaryTerms={[
        {
              term: "Case Studies",
              definition:
                    " A way to convey the process involved in a project, often including visuals and text. In UX/UI, case studies show how design challenges were addressed. Case studies are how designers share their work with the world. They tell the story of your design process.",
        },
        {
          term: "Competitor Analysis",
          definition:
                "Research and identification of competitors and their strengths and weaknesses relative to your own product or service. Competitor analysis helps designers understand the competitive landscape and identify opportunities to differentiate their product.",
    },
    {
      term: "Critique",
      definition:
            "is a feedback style in which the person giving the critique follows a particular format: They lead with a question, then identify a decision in the design being analyzed, relate that decision to an objective or best practice, and finally describe how and why the design decision works to support the objective (or not).",
},
{
  term: "Design portfolios",
  definition:
        " A portfolio is a collection of words and images that tell a story and reflects your creativity and showcases your work to potential clients. It serves as a true example of what you are capable of and what abilities you have to offer.",
}, 
{
  term: "Direct Competition",
  definition:
        "Businesses that are competing for the same target market and customers with similar products or services. Direct competitors offer products that are substitutes for each other.",
}, 





{
  term: "Empathy",
  definition:
        "The ability to understand and share the feelings of another. In design, empathy is essential to understand user needs, motivations, and pain points to create user-centered solutions.",
}, 
{
  term: "Heuristics",
  definition:
        " General guidelines or principles that designers use to evaluate interfaces for usability. Heuristics help in identifying usability problems or areas where improvement is needed.",
}, 
{
  term: "Indirect Competition",
  definition:
        "Conflict between vendors whose products or services are not the same but satisfy the same consumer need. Indirect competition can include products or services that address a similar user problem in a different way.",
}, 
{
  term: "Kanban board",
  definition:
        " is a visual tool that depicts work at various stages of a process.visually depict work at various stages of a process through use of visuals like cards on a board to represent tasks fitted to particular stages of the process.",
}, 
{
  term: "Project management (Traditional)",
  definition:
        "is the practice of initiating, planning, executing, controlling, and closing the team's work to achieve specific goals and meet specific success criteria at the specified time. The primary challenge of project management is to achieve all of the project goals within the given constraints.",
}, 
{
  term: "Project management (Agile)",
  definition:
        "Agile project management operates on a set of principles aimed to enhance the relationship between people and software, and promotes continuous iteration of development and testing. It's ideal for design teams that work with continuous feedback. Agile projects typically use a two-week sprint model.",
}, 
{
  term: "Product managers",
  definition:
        "are responsible for guiding the success of a product. They lead cross-functional teams and are responsible for defining the why, when, and what of the product that the engineering team builds.",
}, 
{
  term: "Product vision",
  definition:
        "The long-term goal or desired state of a product that product managers define to guide the development and evolution of the product. The product vision provides a clear direction and purpose for the product's development.",
}, 
{
  term: "Scrum",
  definition:
        "is the most popular agile framework in software development. It is designed for teams of ten or fewer members, who break their work into goals that can be completed within timeboxed iterations, called Sprints.",
}, 
{
  term: "Sprints",
  definition:
        "A sprint is a short, time-boxed period of time during which a team works to complete a set amount of work. The period of time is no longer than one month and most commonly two weeks. Sprints are at the lifeblood of scrum and agile approaches to project management.",
}, 
{
  term: "Standups",
  definition:
        "A standup meeting is a short meeting between team members, usually held in a common area, away from desks and workstations, or via Zoom. During a standup, team members summarize their completed tasks, in-progress tasks, and tasks to be started. Standup meetings generally run about fifteen minutes. Other names are “daily stand-up” or “daily Kanban,” for teams practicing the Kanban method.",
}, 
{
  term: "SWOT Analysis",
  definition:
        " A strategic planning technique used to help identify an organization's Strengths, Weaknesses, Opportunities, and Threats related to competitors' products and services. SWOT analysis is used in competitive analysis to make informed decisions.",
}, 
{
  term: "Teamwork",
  definition:
        "is when members of a team each understand the team goals and are committed to attaining them using creativity, innovation, and different viewpoints to arrive at solutions. When there's team work, communication is open, honest, respectful, and people are comfortable taking reasonable risks. Each member participates in the team's ability to make high-quality decisions.",
}, 
{
  term: "Tuckman's Team Development Stages: Forming",
  definition:
        "The team has just been introduced and everyone is overly polite and pleasant. At the start, most are excited to start something new and to get to know the other team members.",
}, 
{
  term: "Tuckman's Team Development Stages: Storming ",
  definition:
        "The reality and weight of completing the task at hand have now hit everyone. Personalities may clash. Members might disagree over how to complete a task or voice their concerns if they feel that someone isn't pulling their weight. Remember that most teams experience conflict.",
}, 
{
  term: "Tuckman's Team Development Stages: Norming",
  definition:
        "During the norming stage, people start to notice and appreciate their team members' strengths. Groups start to settle into a groove. Everyone is contributing and working as a cohesive unit.",
}, 
{
  term: "Tuckman's Team Development Stages: Performing",
  definition:
        "Groups are more confident, motivated, and familiar enough with the project and their team that they can operate without supervision. Everyone is on the same page and driving full-speed ahead towards the final goal..",
}, 
{
  term: "Tuckman's Team Development Stages: Adjourning ",
  definition:
        "Once a project ends, the team disbands. This phase is sometimes known as mourning because members have grown close and feel a loss now that the experience is over.",
}, 
{
  term: "User Stories",
  definition:
        "Brief, written descriptions of features or functionality from an end-user perspective. User stories are used in Agile software development to capture requirements and focus on the user's needs and goals.",
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
