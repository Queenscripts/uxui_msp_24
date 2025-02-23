
import CardNavigation from 'src/views/cards/CardNavigation'
import ProtectedRoute from 'src/components/ProtectedRoute'
import React from 'react'
const One = () => {
  return (
    <ProtectedRoute>

      <div style={{display: "flex",width:"100%" }}>
                <div style={{display:"flex", flexDirection:"column",width:"70%" }}>
      <CardNavigation
        moduleTitle='Weeks 20 (revised): 1 hour Coding & Case Study/Portfolio Work'
        activitiesHeader="Yay, more coding!"
        activitiesLink="https://www.freecodecamp.org/"
        day1Activities={[

          "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
          "Responsive web design certificate",
          "Learn HTML Building a Cat Photo App",
          "Learn Basic CSS by Building a Cafe Menu",
          "Learn CSS Colors By Building a Set of Colored Markers",
          "Learn HTML Forms By Building a Registration Form"
        ]}
        day2Activities={[
          "https://www.freecodecamp.org/learn/front-end-development-libraries/",
          "Front End Development Libraries",
          "Bootstrap",
          "jQuery",
          "SASS"
        ]
        }
        day3Activities={[
          "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
          "JavaScript Algorithms and Data Structures",
          "Learn Introductory Javascript By Building a Pyramid Generator",
          "Review Javascript Fundamentals By Building a Gradebook App"
        ]
        }
        // slidesLinks={[
        //   `https://docs.google.com/presentation/d/e/2PACX-1vQ2MW_k_6gHQJ1cn6mXVfuYMNuxxx7SHYil3jp85AzYyRjJxJFIyFv-t4ByUUmgKBZ1w-KQXmgy1sNi/embed?start=false&loop=false&delayms=10000`,
        //   `https://docs.google.com/presentation/d/e/2PACX-1vQyHGwZIAvudjbWiBxewlsGaxBYJuQuwrLH6hcVJc9JfB5NHpXVxxVy1dWjZWVdjS2LTGmNl0UF3hjy/embed?start=false&loop=false&delayms=10000`,
        //   `https://docs.google.com/presentation/d/e/2PACX-1vQv7HhLNlieVbcrU34suqgeU3pad_4v5WhcCPknGod5icOpgdZ1uBRpPumf5Ea-CuZbLFEr7SBbxo8i/embed?start=false&loop=false&delayms=10000`,
        // ]}
        // slideURL="https://drive.google.com/drive/folders/1jwY9gERJn67O8auobitsrrVwVaaaRXGN?usp=sharing"
        moduleChallenge='Presenting your Work '
        challengeDeliverables="
      This is the culmination of many weeks of work. You&lsquo;ve built your portfolio site and included your strongest case studies. You&lsquo;ve also gathered peer feedback and iterated the site based on the feedback. Next week you&lsquo;ll be presenting the strongest case study in your online design portfolio to the live class.

      "
        moduleChallengeLink='https://docs.google.com/document/d/1kr_uHxZKc11BDhlKnZ9lpyHm2lICmiehzzaM1X5kh8E/edit?tab=t.0#heading=h.bv6msf9tz0bm'
      />
</div>

     <div style={{width:"30%" }}>
      <CardNavigation
        moduleTitle='Weeks 20 (original): Javascript Fundamentals'
        activitiesHeader="Yay, more coding!"
        activitiesLink="https://drive.google.com/drive/folders/1I_ZRtM2jVBWqqIZ1f6HQzcFJVecGk-hr"
        day1Activities={[

          "https://drive.google.com/drive/folders/1Y3F0UIoY0JOZdHtV4kz7fsCK-wjWqcEU",
          "20.1-01 Hello World Again",
          "20.1-02 JavaScript Variables",
          "20.1-03 Using jQuery",
          "20.1-04 Event Listeners",
        ]}
        day2Activities={[
          "https://drive.google.com/drive/folders/149BLRzjXG7_S2bRcs07BYLNxZW5hBr7A",
          "20.2-01 Writing Conditionals",
          "20.2-02 Conditional Clicks",
          "20.2-03 Simple Web App",
        ]
        }
        day3Activities={[
          "https://drive.google.com/drive/folders/1xUM7xW4az18EJOCQeTAtur_Vy95AGpgy",
          "20.3-01 Smart Accordion",
          "20.3-02 Animated Menu",
          "20.3-03 Preloader"
        ]
        }
        slidesLinks={[
          `https://docs.google.com/presentation/d/e/2PACX-1vQ2MW_k_6gHQJ1cn6mXVfuYMNuxxx7SHYil3jp85AzYyRjJxJFIyFv-t4ByUUmgKBZ1w-KQXmgy1sNi/embed?start=false&loop=false&delayms=10000`,
          `https://docs.google.com/presentation/d/e/2PACX-1vQyHGwZIAvudjbWiBxewlsGaxBYJuQuwrLH6hcVJc9JfB5NHpXVxxVy1dWjZWVdjS2LTGmNl0UF3hjy/embed?start=false&loop=false&delayms=10000`,
          `https://docs.google.com/presentation/d/e/2PACX-1vQv7HhLNlieVbcrU34suqgeU3pad_4v5WhcCPknGod5icOpgdZ1uBRpPumf5Ea-CuZbLFEr7SBbxo8i/embed?start=false&loop=false&delayms=10000`,
        ]}
        slideURL="https://drive.google.com/drive/folders/1jwY9gERJn67O8auobitsrrVwVaaaRXGN?usp=sharing"
        moduleChallenge='Presenting your Work '
        challengeDeliverables="
      This is the culmination of many weeks of work. You&lsquo;ve built your portfolio site and included your strongest case studies. You&lsquo;ve also gathered peer feedback and iterated the site based on the feedback. Next week you&lsquo;ll be presenting the strongest case study in your online design portfolio to the live class.

      "
        moduleChallengeLink='https://docs.google.com/document/d/1kr_uHxZKc11BDhlKnZ9lpyHm2lICmiehzzaM1X5kh8E/edit?tab=t.0#heading=h.bv6msf9tz0bm'
      />
      </div>


      </div>

    </ProtectedRoute>


  )
}

export default One
