
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
moduleTitle='Week 9: Web Dev Intro' 
activitiesHeader="Web development basics" 
activitiesLink="https://drive.google.com/drive/folders/1rasAvaa1FlIn5y9WXA2lxQ6Prd0nMMTl"
day1Activities={[
 "https://drive.google.com/drive/folders/14TtiC--fnWCsga2iyVE0YLnMBoUQhuAy",
 "09.1-01 Hello World",
 "09.1-02 Coding Content with Semantic HTML",
 "09.1-03 Targeting Elements with CSS Selectors",
 "09.1-04 Style Your Page",
]}
day2Activities={[
 "https://drive.google.com/drive/folders/14xGYn_VaDQIwfQMVMCr6g1hI7bly7sRo",
 "09.2-01 Containers and Structure",
 "09.2-02 Apply the CSS Box Model",
 "09.2-03 Style Our Style Guide",
 "09.2-04 Custom Fonts",
]
}
day3Activities={[
  "https://drive.google.com/drive/folders/1YtMp5UlVbmzu9NIaPqxBeS9TIlql8C1X",
  "09.3-01 Practice With CSS Positioning",
  "09.3-02 CSS Positioning Properties",
  "09.3-03 One-Page Website",
  "09.3-04 Upload Your First Webpage"


]
}
slidesLinks={[
 `https://docs.google.com/presentation/d/e/2PACX-1vQc8WWOE_gAA66ZRX-Mwn24NPvbfvmYE7Ma-g1W2aNvDygrSKQz7wzpx0WmGuObFHG9sQvGoRBiePNH/embed?start=true&loop=true&delayms=5000`,
`https://docs.google.com/presentation/d/e/2PACX-1vQ0AvyNuGeHqTmTsx8MFgZAJBXNe3jpTAKTphYj4KVl9ZcpCXwjrTAXkGmwt8FdM7Vo81HVpnSJfzg9/embed?start=true&loop=true&delayms=5000`,
 `https://docs.google.com/presentation/d/e/2PACX-1vSc7V5jP30A_8T8b-QR72XJIkRDReHjOtjUTA_vqUbMPlZef-Zc4iXfWuBsD6V1DstTodoevLcM1p7K/embed?start=true&loop=true&delayms=5000`
]}
slideURL="https://drive.google.com/drive/folders/1765jF23PrZsNkUU8o0Kh8qhZKn7b0Zmm?usp=sharing" 
moduleChallenge='Gulp Roast Coffee Webpage'
 moduleChallengeLink='https://docs.google.com/document/d/12vr8RW62fnL5T0EZcMrKtrYYZlQGvOwGvvEPxzwz7W0/edit?tab=t.0'

 glossaryTerms={[
  {
        term: "Block elements",
        definition:
              "In HTML programming, a block-level element is any element that starts a new line, like a paragraph, and uses the full width of the page or container.",
  },
  {
    term: "Class Attribute",
    definition:
          " Classes are attributes that can be added to HTML elements that are used as a selector for CSS. Classes are used to define CSS that is shared by multiple elements. For example, if you have a series of cards on your website you would use a class to declare the same CSS properties to them all in one selector.",
},
{
  term: "Code conversational",
  definition:
        "The ability for designers to be able to communicate technical concepts with developers and members of a technology team.",
},
{
  term: "Comments",
  definition:
        "A comment is an explanation or annotation in the source code of a computer program that only the programmers can see. Comments are also used to “save” pieces of code for later, or explain a piece of HTML that you are working on.",
},
{
  term: "Content inside containers",
  definition:
        "Content inside your containers refers to tags that are “nested” inside of another container. Examples of content commonly wrapped inside a container (like a div, or section tag) are image tags for imagery, p tags for text, and h1 tags for headers.",
},
{
  term: "CSS",
  definition:
        "Cascading style sheets (CSS) describe the presentation of a document written in a markup language like HTML, thereby determining the visual design of an HTML document.",
},
{
  term: "CSS Box Model",
  definition:
        "The CSS box model is a box that wraps around every HTML element, specifying how it displays on a web page. The box model of any CSS element is modifying by the following properties: height, width, margin, padding, and border. The box model’s height and width can also be defined by elements contained inside of it (think images or text.)",
},
{
  term: "CSS Display Property",
  definition:
        "The display CSS property dictates whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid, or flex.",
},
{
  term: "CSS Properties",
  definition:
        "A CSS property refers to any individual CSS that is applied to a HTML element. For example, if you applied color: red; to a HTML element - color is the “property”.",
},{
  term: "CSS selector",
  definition:
        "CSS selectors are used to select the content you want to style. CSS selectors select HTML elements according to its id, class, type, attribute etc. There are several different types of selectors in CSS.",
},
{
  term: "CSS Value",
  definition:
        "A value is the specific effect that you apply from a CSS property. For example, if you applied color: red; to a HTML element - red is the value of the property.",
},
{
  term: "Debugging",
  definition:
        "the process of finding and fixing errors in an HTML, CSS, or JavaScript document.",
},
{
  term: "Declaration",
  definition:
        "A declaration in CSS refers to the complete syntax for applying a CSS style to an element. In CSS, a declaration is made up of a property and a value.",
},
{
  term: "GitHub Pages",
  definition:
        "GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process and publishes a website.",
},
{
  term: "Google Chrome’s Web Inspector",
  definition:
        "ChromeWeb Inspector is a set of web developer tools built directly into the Google Chrome browser. Google Chrome’s Web Inspector can help you edit web pages on-the-fly and diagnose problems with your website’s CSS or JavaScript quickly, which ultimately helps you build better websites, faster.",
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
