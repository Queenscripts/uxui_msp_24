import CardNavigation from "src/views/cards/CardNavigation";
import ProtectedRoute from "src/components/ProtectedRoute";
import React from "react";
const One = () => {
  return (
    <ProtectedRoute>
      <CardNavigation
        moduleTitle="Week 10: Responsive Design"
        activitiesHeader="Responsive Layouts & CSS Frameworks"
        activitiesLink="https://drive.google.com/drive/folders/1rasAvaa1FlIn5y9WXA2lxQ6Prd0nMMTl"
        day1Activities={[
          "https://drive.google.com/drive/folders/1Hd1AqRhPn4HyC0YD0I2H4Ld_5QTPFGC1s",
          "10.1-01 Grid-Based Layout Investigation",
          "10.1-02 CSS Flexbox Layout",
          "10.1-03 Build a Responsive Layout",
        ]}
        //       day2Activities={[
        // "https://drive.google.com/drive/folders/1MWovSwawyVUFNS6xJwyJ2D_gl8rDEzXB",
        // "10.2-01 Get Used to Grid",
        // "10.2-02 Oops, You Grid It Again",
        // "10.2-04 Publish Jake's Eatery",
        //       ]
        //       }
        //       day3Activities={[
        //         "https://drive.google.com/drive/folders/1zsDJbKvHJ8r8EuoeRGXf0roLmpx9IjHc",
        //         "10.3-01 Getting Started With Bootstrap",
        //         "10.3-02 Add a Navigation Bar",
        //         "10.3-03 Add Containers, Rows, and Columns",
        //        "10.3-04 Add Cards to Bootstrap",
        //        "10.3-05 Forms and Modals",
        //        "10.3-06 Explore Bootstrap Components"

        //       ]
        //       }
        slidesLinks={[
          `https://docs.google.com/presentation/d/e/2PACX-1vSZ8bd4Q_nXAfNSPKu2HVc6M4Ie9m2PdGm7sz5n5hf1iHu9E0WbNp7qA-AGLvXRqL2MzEdJ5Bd0SYC3/embed?start=true&loop=true&delayms=5000`,
          // `https://docs.google.com/presentation/d/e/2PACX-1vTob57Dy8N_stSfK0j9os0RFlxbwGOYsh2JNeS8774WZ3xq-Pzvvip8Cvc1NTkl5EaFg05NxjQEhgNy/embed?start=true&loop=true&delayms=5000`,
          // `https://docs.google.com/presentation/d/e/2PACX-1vSIyXx7oTTHVQPs5KeReKdL8iyzEYRnpwPHY1kZirrD1zWMgMM7uqKDwA-eWoGBD_kxih2Ltu__1lCF/embed?start=true&loop=true&delayms=5000`
        ]}
        slideURL="https://drive.google.com/drive/folders/1B3KGe2jtARP8SzhaZT2IRZsnJyY3sZoD?usp=sharing"
        moduleChallenge="Homepage UI Design and Testing"
        challengeDeliverables={`In this challenge, you'll apply your responsive design skills and your knowledge of using VS Code and GitHub to design and publish a website for Gulp Roast Coffee.`}
        moduleChallengeLink="https://docs.google.com/document/d/1Biu8sGgI6QTLu948t9oMFdQ7yKZh2ntmpV2-LCpfUJI/edit?tab=t.0"
        glossaryTerms={[
          {
            term: "Align-Items",
            definition:
              " Align-items is a CSS property that is used to align flex children vertically inside their parent container.",
          },
          {
            term: "flex-start",
            definition:
              "aligns items at the beginning of the container (or top).",
          },
          {
            term: "flex-end",
            definition: " aligns items at the end of the container (bottom).",
          },
          {
            term: "center",
            definition: "centers content vertically in its parent container.",
          },
          {
            term: "baseline",
            definition: "aligns items so that their baselines align.",
          },
          {
            term: "stretch",
            definition:
              " items stretch to fill the container top-bottom or left-right.",

          },
          {
            term: "Bootstrap",
            definition:
              "Bootstrap is a framework used to develop Front-end websites using HTML, CSS, and JavaScript. X (formerly Twitter) developed Bootstrap.",
              
          },
          {
            term: "Bootstrap Components",
            definition:
              "A Bootstrap component is prewritten HTML, that has already been styled using CSS, and given interaction with jQuery. Bootstrap components are meant to be copied, pasted, and customized into a web project.",
              

          },
          {
            term: "Bootstrap’s Responsive Column System",
            definition:
              "Bootstrap’s responsive column system is a series of CSS classes that are applied to HTML by using classes.",
              
          },
          {
            term: "Call To Action (CTA)",
            definition:
              "A call to action is a statement designed to prompt immediate action associated with interacting with a user interface. An example of a call to action is a button that says, 'shop now,' with text and images to entice the user to perform the desired action.",
              
          },
          {
            term: "Media Queries",
            definition:
              "A Media query is a CSS module allowing content rendering to adapt to conditions such as screen resolution. Media queries make sites responsive by overwriting CSS properties written before it.",
              
          },
          {
            term: "Responsive Web Design (RWD)",
            definition:
              "is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices",
              
          },
          {
            term: "Responsive components",
            definition:
              "Responsive components such as Menus, Calendars, Cards, and more are designed and coded with media queries and fluid design concepts.",
              
          },
          {
            term: "Viewport",
            definition:
              "A viewport is referring to the screen (and screen size) of any device when viewing a web page or application.",
              
          },
        ]}
      />
    </ProtectedRoute>
  );
};

export default One;
