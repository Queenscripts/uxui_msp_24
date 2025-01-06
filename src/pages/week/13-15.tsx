import CardNavigation from "src/views/cards/CardNavigation";
import ProtectedRoute from "src/components/ProtectedRoute";
import React from "react";
const One = () => {
  return (
    <ProtectedRoute>
      {/* <CardNavigation
        video={true}
        videoLinks={[
        "https://www.youtube.com/embed/YW2WpCSdNl8?si=gcHgKqkYMZAZJhcA",
        "https://www.youtube.com/embed/ebPLYcAx__s?si=Z8ezLwY55DckshNy",
        "https://www.youtube.com/embed/uZwRVckjQWI?si=oyEb9qcB8TDiqrxW",
        "https://www.youtube.com/embed/ZVZfWfqmRBY?si=35saNnCe84Kfwhig" 
        ]}
        moduleTitle="Weeks 13-15: Week 15"
        activitiesHeader="Group Project Presentations"
        activitiesLink="https://drive.google.com/drive/folders/1BF8PQUURNcnY9Zqh9yj1SJ3_rOG_C-FW"
        slidesLinks={[
          `https://docs.google.com/presentation/d/e/2PACX-1vQkfs-eRNO2OpvLvpxmONMTwxz69nWX9hiaN_s4jkiOAGR8eH0zmeUia2CTp9OQiopGQoitUWahgv-t/embed?start=true&loop=true&delayms=10000`,
          `https://docs.google.com/presentation/d/e/2PACX-1vTV5xAdyCHVvtYQYwVMAiY1wMcy4i5NwOgtpFM3wPLj0KE7eymMrIZkPs5JAVKt1kfVNViicDyYWVxV/embed?start=true&loop=true&delayms=10000`,
     `https://docs.google.com/presentation/d/e/2PACX-1vQYispR6hx9kojlhvcr-6t9rokoI0bkvCwR8MLCS8q2pJRxlSPcCxzvXKG4wBuOXRlCRAajXVpAa3LG/embed?start=true&loop=true&delayms=10000`
        ]}
        slideURL="https://drive.google.com/drive/folders/1tOzjXGhv-hbbMeKl8bHy1kj9dTwqcnta?usp=sharing"
        moduleChallengeLink="https://docs.google.com/document/d/1JD-YAiHo9AgmUVIUNBrZiXo8-ykvrGtxIxM7mTaCG3c/edit?tab=t.0"
        challengeDeliverables="Wicked Problem Presentations"
        glossaryTerms={[
          {
            term: "Case Study",
            definition:
              "An elaborate examination of a project, scenario, or design process that delves into the steps undertaken and the results obtained, offering insights into actions and achievements.",
          },
          {
            term: "Clickable Prototype",
            definition:
              "A functional model of a digital product that enables user interaction through clicking on elements, like buttons or links, to navigate and evaluate the layout and features.",
          },
          {
            term: "Constructive Feedback",
            definition:
              "Feedback aimed at being constructive and beneficial, offering suggestions for enhancement without excessive criticism, promoting growth and improvement.",
          },
          {
            term: "Deliverables",
            definition:
              "Tangible results or products generated from a project's efforts, encompassing presentations, reports, or designs that are delivered or provided as outcomes of the project work.",
          },{
            term: "Glow and Grow Method",
            definition:
              "A feedback approach that emphasizes recognizing strengths (Glow) and offering constructive suggestions for growth or enhancement (Grow).",
          },
          {
            term: "Presenter Notes",
            definition:
              "Supplementary information or key points accompanying presentation slides to assist the speaker in delivering the content effectively.",
          },
          {
            term: "Project Review",
            definition:
              "An evaluation procedure that assesses project objectives, deliverables, and benchmarks to ensure successful project completion and alignment with desired outcomes.",
          },


        ]}
      />

      <br />
      <br />


    

      
     

<CardNavigation
        // video={true}
        // videoLinks={[
         
        // ]}
        moduleTitle="Weeks 13-15: Week 15"
        activitiesHeader="Group Project Prototyping Phase"
        // activitiesLink="https://drive.google.com/drive/folders/1BF8PQUURNcnY9Zqh9yj1SJ3_rOG_C-FW"
        slidesLinks={[
          `https://docs.google.com/presentation/d/e/2PACX-1vTafLxMZLuCde4RAX4aZDU1fiQ2T4iYq9qG4fuJ7CfNjqUoJZq4gCHmhT6EUU_2-qK2qX5AgJyK6jKU/embed?start=false&loop=false&delayms=10000`,
          `https://docs.google.com/presentation/d/e/2PACX-1vRtcEmZ0bh_AOGazPCoLY2_gkgAwrXjKBzt-CA6FwpYEn2SuL6eu_iUbw-YoQFSbDyaPTwZ7n_byInc/embed?start=false&loop=false&delayms=10000`,
          // `https://docs.google.com/presentation/d/e/2PACX-1vTqVD_2lb2Q5vYhQ1JrWIFWGn87JuElBKvJJEVO06ROeOCNscS_EHBTMWoof0w3H4p4oGzVCdDDXrNL/embed?start=false&loop=false&delayms=10000`,
        ]}
        day2Activities={[`https://drive.google.com/drive/folders/1E_FF7WxMCr2JrAT9f1JE-FV687cOMsAo`,"13.2-01 Design Sprints Day 1", "13.2-02 Design Sprints Day 2"]}
        slideURL="https://drive.google.com/drive/folders/16awTdNZQVOnhYzrfrF5iHuat2sYyz9iE?usp=sharing"
        moduleChallengeLink="https://docs.google.com/document/d/1QIypg69qWY_YfNUsI20up4-66dlMZS5flMk3XjQblpg/edit?tab=t.0"
        challengeDeliverables="In this Challenge, you and your team will kick off a redesign of an actual nonprofit website. (You&lsquo;ll continue to build on this project in upcoming Challenges.) In your design career, you&lsquo;ll often work on existing products and how to best meet user needs. In this Challenge, you&lsquo;ll rapidly innovate and collaborate with others to develop ideas for potential implementation. This project will showcase your skills as a creative thinker, a collaborator, and a designer who can follow through on projects of varying sizes."
        // glossaryTerms={[
        //   {
        //     term: "Accessibility",
        //     definition:
        //       "Creating products, devices, services, or environments that cater to a diverse range of abilities and disabilities, ensuring inclusivity and usability for all individuals.",
        //   },

        //   {
        //     term: "AMA (Ask Me Anything)",
        //     definition:
        //       " A live session where students engage with instructors, posing questions on specific topics like UX/UI, design thinking, or career-related inquiries.",
        //   },
        //   {
        //     term: "Clickable Prototype",
        //     definition:
        //       " A functional model of a digital product that enables user interaction through clicking on elements, like buttons or links, to navigate and evaluate the layout and features.",
        //   },
        //   {
        //     term: "Cognitive Disabilities",
        //     definition:
        //       "Conditions impacting cognitive functions such as memory, attention, problem-solving, and language abilities, influencing how individuals process and respond to information.",
        //   },
        //   {
        //     term: "Color Contrast",
        //     definition:
        //       "The distinction in brightness or color between text and its background, crucial for enhancing readability and accessibility for users with visual impairments, ensuring clear visual communication.",
        //   },
        //   {
        //     term: "Equitable Access",
        //     definition:
        //       " Tools and resources to ensure fair and balanced access to information and services for all users, promoting inclusivity and equal opportunities.",
        //   },
        //   {
        //     term: "Inclusive Design",
        //     definition:
        //       "The practice of developing products, services, or environments that prioritize diverse user needs, including those with disabilities, to guarantee accessibility and usability for all individuals.",
        //   },
        //   {
        //     term: "Interactive Prototype",
        //     definition:
        //       "A dynamic model that mimics the interactive functionalities of a final product, allowing users to engage with the design through actions like clicking, swiping, and interacting with various elements.",
        //   },
        //   {
        //     term: "Universal Design",
        //     definition:
        //       "The approach of creating products, services, or environments that cater to the broadest spectrum of individuals possible, regardless of abilities or disabilities, promoting equal access and usability for all users.",
        //   },
        //   {
        //     term: "WCAG (Web Content Accessibility Guidelines)",
        //     definition:
        //       "Internationally recognized standards specifying guidelines for web accessibility, facilitating the creation of web content that is inclusive and accessible to individuals with disabilities.",
        //   },
        // ]}
      />

      <br />
      <br />

      <CardNavigation
        moduleTitle="Weeks 13-15: Week 14"
        activitiesHeader="Content Design"
        activitiesLink="https://drive.google.com/drive/folders/1BF8PQUURNcnY9Zqh9yj1SJ3_rOG_C-FW"
        day1Activities={[
          "https://drive.google.com/drive/folders/1ewZeXa-pqVjRokTFBSHng1pZYh6J8xxu",
          "14.1-01 Content Inventory",
          "14.1-02 Content Audit",
          "Content Inventory and Audit"
        ]}
        // day2Activities={[
        //   "https://drive.google.com/drive/folders/1Qty8lOyVNy7JOpq1BpEP1vpb71BbtvQ6",
        //   "14.2-01 Brand Visual Identity",
          
        // ]}
        // day3Activities={[
        //   "https://drive.google.com/drive/folders/1twY7QVW2Sb5q2vuHv0STjUY_30bJMvoo",
        //   "14.3-01 Brand Positioning Statements",
        //   "14.3-01 Brand Positioning Statements Template",
        //   "14.3-02 Brand Voice and Tone Matrix"
        // ]}
        slidesLinks={[
          `https://docs.google.com/presentation/d/e/2PACX-1vRa4UB310N5S_Ta3-U0mDA-H8b10VqVE-OwU_g9ppTr16JVn-8BLitcKjCjnEXru7E6XApfg6m67M8t/embed?start=true&loop=true&delayms=5000`,
          // `https://docs.google.com/presentation/d/e/2PACX-1vT2tOklnZKRplaKmhkOm6xdyZOvUhugyMqC2d8xJs_Ir17TwC2zqUsJ2NwpTYwZnx-yxp9wNmLmcFhl/embed?start=true&loop=true&delayms=5000`,
          // `https://docs.google.com/presentation/d/e/2PACX-1vQBlYvF2S7p1mU7IRuMhc6CpWhyFZEiidNSmONhakoV5B0oTOrfDm5Jrt-QjEYrkJTFOueqDKMhszYX/embed?start=true&loop=true&delayms=5000`,
        ]}
        slideURL="https://drive.google.com/drive/folders/1f3Ax8yHfsRL-MUi33d83Ex_JGUupyHcK?usp=sharing"
        moduleChallengeLink="https://docs.google.com/document/d/1LXegaHDZLdim1NEdeSX-n01rz7T-1aTVYD3yXkL8rgk/edit?tab=t.0"
        challengeDeliverables="You will work with your group to analyze the content of the non-profit website that you’re redesigning, and then you’ll design an information architecture and navigation system for your new version of the website."
        glossaryTerms={[
          {
            term: "Affinity Mapping",
            definition:
              "A method employed to systematically categorize and group data into themes or patterns, aiding in data analysis and interpretation.",
          },
          {
            term: "Behavioral Archetypes",
            definition:
              "Common and representative user behaviors that offer valuable insights into user needs and motivations, facilitating a deeper understanding of user preferences and actions.",
          },
          {
            term: "Creative Matrix",
            definition:
              "An innovative tool utilized to spark and cultivate design concepts by integrating diverse elements or variables, fostering creativity and idea generation in the design process.",
          },
          {
            term: "Empathy Framework",
            definition:
              "A structured approach designed to foster designers' understanding of users' emotions, thoughts, and behaviors, enabling empathetic design solutions that resonate with user experiences and needs.",
          },
          {
            term: "HMW Statement",
            definition:
              "A 'How Might We' statement reframes a problem as an opportunity to inspire innovative solutions and design thinking. For example, How might we re-create the travel planning experience online to help users spend less time packing?",
          },
          {
            term: "Ideate",
            definition:
              "A 'How Might We' statement reframes a problem as an opportunity to inspire innovative solutions and design thinking. For example, How might we re-create the travel planning experience online to help users spend less time packing?",
          },
          {
            term: "POV Statement",
            definition:
              "A 'Point of View' statement that articulates user needs, insights, and perspectives, guiding the design process towards addressing user issues and creating impactful solutions. Priority Matrix: A tool to rank and prioritize items according to their significance and time sensitivity, aiding in effective decision-making and task management.",
          },
          {
            term: "Storyboard",
            definition:
              " A visual sequence of illustrations depicting critical moments or interactions in a user's journey or experience with a product or service, helping to visualize and understand the user's interaction flow.",
          },
          {
            term: "Synthesize",
            definition:
              "The process of merging and integrating various elements or information to create a unified and coherent whole, facilitating clarity and understanding in complex design or problem-solving processes.",
          },
          {
            term: "User Flow",
            definition:
              " A graphical depiction illustrating the sequential steps a user follows to accomplish a specific task within a system or application, helping to visualize the user's interaction path.",
          },
          {
            term: "User Insights",
            definition:
              "Valuable findings derived from user research that guide and shape design decisions, ensuring user-centered solutions and experiences.",
          },
          {
            term: "User Journey",
            definition:
              "A visual narrative mapping out a user's complete experience with a product or service, providing insights into the user's interactions, emotions, and touchpoints throughout the entire journey.",
          },
          {
            term: "Wireframes",
            definition:
              "Simplified and visual blueprints showcasing the skeletal structure and layout of a website or application, focusing on functionality and content placement during the design process.",
          },
        ]}
      /> */}

<br />

      <CardNavigation
        moduleTitle="Weeks 13-15: Week 13"
        activitiesHeader="Group Project | Design Sprints "
        day1Activities={[
          "https://drive.google.com/drive/folders/1ojrvsCJ3PZYCWVh8RX1gZZNeEsX-ZJpc",
          "13.1-01 Project 2 Proposal",
        ]}
        day2Activities={[
          "https://drive.google.com/drive/folders/1E_FF7WxMCr2JrAT9f1JE-FV687cOMsAo",
          "13.2-01 Design Sprints Day 1",
          "13.2-02 Design Sprints Day 2"

        ]}
        day3Activities={[
          "https://drive.google.com/drive/folders/1uuDrybCFPVo7mNE7U-Iz-t21lwUkhM25",
          "13.3-01 Design Sprint Day 3",
          "13.3-02 Design Sprint Day 4",
          "13.3-03 Design Sprint Day 5"

        ]}
        slidesLinks={[
          `https://docs.google.com/presentation/d/e/2PACX-1vTafLxMZLuCde4RAX4aZDU1fiQ2T4iYq9qG4fuJ7CfNjqUoJZq4gCHmhT6EUU_2-qK2qX5AgJyK6jKU/embed?start=true&loop=true&delayms=5000`,
          `https://docs.google.com/presentation/d/e/2PACX-1vRtcEmZ0bh_AOGazPCoLY2_gkgAwrXjKBzt-CA6FwpYEn2SuL6eu_iUbw-YoQFSbDyaPTwZ7n_byInc/embed?start=true&loop=true&delayms=5000`,
          `https://docs.google.com/presentation/d/e/2PACX-1vTqVD_2lb2Q5vYhQ1JrWIFWGn87JuElBKvJJEVO06ROeOCNscS_EHBTMWoof0w3H4p4oGzVCdDDXrNL/embed?start=true&loop=true&delayms=5000`,
        ]}
        slideURL="https://drive.google.com/drive/folders/16awTdNZQVOnhYzrfrF5iHuat2sYyz9iE?usp=sharing"
        moduleChallengeLink="https://docs.google.com/document/d/1QIypg69qWY_YfNUsI20up4-66dlMZS5flMk3XjQblpg/edit?tab=t.0"
        challengeDeliverables="You and your team will kick off a redesign of an actual nonprofit website. (You&apos;ll continue to build on this project in upcoming Challenges.) "
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

  );
};

export default One;
