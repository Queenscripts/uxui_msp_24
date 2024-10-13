// ** MUI Imports
import React, { useEffect } from 'react';
import router from 'next/router';
import ProtectedRoute from 'src/components/ProtectedRoute'


const Dashboard = () => {
useEffect(()=>{
  // CHANGE WEEK
  router.replace("/week/4-7/")
},[])
  return (
    <ProtectedRoute>
    <>
       {/* <Link target='_blank' href='/glossary' style={{textAlign:"center", zIndex: 1, fontWeight: "800", color: "#110B11"}}>
        <section style={{textAlign:"center", zIndex: 1, fontWeight: "800", color: "#110B11", cursor: "pointer"}}> Checkout out our BETA design glossary </section>
        </Link>
      <span style={{backgroundColor:"#BDA3FA", height: "10vh", margin: "10vh"}}> <div style={{ position: "relative", zIndex: "-1", opacity:".7", backgroundColor:"#BDA3FA", height: "5vh",margin: "-7vh 0 2vh", borderRadius:"50px"}}></div> </span>
          <Box style={{display: "flex", flexDirection:"column", padding:"10px", justifyContent: "center", alignItems:"center",  background:"#077B98", color:"white", fontWeight:"bolder", marginBottom:"5px", textShadow:"0 0 7px #fff,0 0 10px #fff, 0 0 51px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 82px #0fa, 0 0 102px #0fa, 0 0 151px #0fa" }}>
        <h2 style={{marginBottom:"-5px"}}> Now grading: Module 16 </h2>
  </Box> */}
    {/* <CardNavigation 
      moduleTitle='Weeks 22-24: Project Week' 
      activitiesHeader="Let's kill those final projects!" 
      activitiesLink="https://drive.google.com/drive/folders/1hJA2hrSZBxK7xxP2shl0ic6kVjTiqqW_"
      day1Activities={[
  
        "https://drive.google.com/drive/folders/1hJA2hrSZBxK7xxP2shl0ic6kVjTiqqW_",
        "Final Group Project 3: Requirements Doc",
        "22.1- Final Project 3 Gantt Chart",
        "22.2- Final Project 3 Proposal"
      ]}
      day2Activities={[
        // "https://drive.google.com/drive/folders/17PixbVAwIjhExQ5NdYxnAOZkmV4vfled",
        // "21.2-01-Hiring Manager Proto-Persona Activity",
        // "21.2-02-Measuring Your Design Portfolio’s Performance",
        // "21.2-03-Set Up Google Analytics"
      ]
      }
      day3Activities={[
        // "https://drive.google.com/drive/folders/1bYSDpYxwIQZ96izLlahNbpcki-ClpVUE",
        // "21.3-Final Project Pitch Notes",
        // "21.3-Final Project Outline Template (Make a Copy)",
      ]
      }
      slidesLinks={[
        `https://docs.google.com/presentation/d/e/2PACX-1vSs4fWyxoLlxra9H7za34cxhpZcIQKkldPKIezqvlOsEPoKMyFSDQFP_ZyRyCx3ZEK0NkFYWsE8OmAK/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vRlatoiz46TSrXacL0qirHtLNox6GEXuu1aejxSJFI5vJGM0kR32LeNr0R354PmNWDx8tS3NSjM58dk/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vSFAkWqMVqyPUiV121z2fc_xh3XufxIEMPKFT7Sx1uRlCoBrC9F0MqQv_sCenjY6VIlk2bJJ51A4FO9/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vR_j8iH__eH0eH4VbemqKiIAIh8XS19Z0MJKwoPtN39ZVgWC63MeJdEDGxPeJ92DLSB4ZRDsziI9WoP/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vSHqxw1YAPNvhU1uXVWkNIpueLpX-7qWn14ujD2z5mncSRrJY8oJOoi-tUWKbkYI4WwEupjg8FpjAbC/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vSIB30FoJHli91glDOl1i-nO7KPnl2Sgv2ez-1luq90uzJ5gi63U1DwwUaz8T7Re-KlcmSURas5XGag/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vQFGl86Fh1ZZXjSlNC78w4dWe8kn_CTRsMZ_yf7uxCXP1b43XmKkrkPKBwcWWa3nDf2SPv_uE1kWGHA/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vQNKUQfs62UwEzZJKlGatYtOubECbXgNxjmZsfEm6OC0eGA9aZeOtii_I537X8l6Uj3FR35id9ZnZzX/embed?start=false&loop=false&delayms=3000`,
        `https://docs.google.com/presentation/d/e/2PACX-1vTwcmAMGcsvY_iqGi-MCajf2KesmUV_X2P6gE7DJzCqRHTcaX2tRLUN_5rovP4Zk_YbpeC-GZM_JNWF/embed?start=false&loop=false&delayms=3000`
       
            ]}      
      slideURL="https://drive.google.com/drive/folders/1fpz54_M0qowG_I6jwAX5NTocs6k_iKbz?usp=drive_link" 
      moduleChallenge='FINAL GROUP PROJECT 3'
      challengeDeliverables="
      "
       moduleChallengeLink='https://docs.google.com/document/d/1XJszqIOn5yTjWwWiOdpXQ86-NLYdmMCRNriEw9GA8yc/edit#heading=h.36oen4ytsq26'
    /> */}
 {/* <CardNavigation 
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
    /> */}
    <h2>Welcome to the bootcamp site with Queenscript!</h2>
</>    </ProtectedRoute>
  )
}

export default Dashboard
