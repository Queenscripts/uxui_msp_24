import CardNavigation from "src/views/cards/CardNavigation";
import ProtectedRoute from "src/components/ProtectedRoute";
const One = () => {
  return (
    <ProtectedRoute>
      <CardNavigation
        moduleTitle="Week 2: UX + Design Thinking: Definition, Ideation, UX Storytelling"
        activitiesHeader=" Storytelling + User Research"
        activitiesLink="https://drive.google.com/drive/folders/1B_XhuxYea2EAXKVJqRc1yc5-gMj2NvdL"
        day1Activities={[
          "https://drive.google.com/drive/folders/1B_XhuxYea2EAXKVJqRc1yc5-gMj2NvdL",
          "2.1-01 User Insight Statements",
          "2.1-01 User Insight Template",
          "2.1-02 How Might We",
          "2.1-03 Problem Statements",
          "2.1-04 User Stories"
        ]}
        day2Activities={
          [
            "https://drive.google.com/drive/folders/1JkzILoELXW246fk_XvkRHnM9BRZqrrm_?ths=true",
            "2.2-01 Creative Matrix",
            "2.2-02 I Like, I Wish, What If",
            "2.2-03 Prioritization Matrix",
          ]
          // ["https://drive.google.com/drive/folders/1rt6m6ub_XBUBU-R1kpfAcaOkSQwjm4IM", "01.2-01-User-Interview", "01.2-01.1-User-Interview-Sample-Questions"]
        }
        // day3Activities={
        //   [
        //     "https://drive.google.com/drive/folders/1sHF4lUDP5XSdMucnMplN7ye2VSdWRi7s",
        //     "02.3-01-User-Scenarios",
        //     "02.3-02-Storyboards",
        //     "02.3-03-User-Journey-Maps",
        //   ]
          // ["https://drive.google.com/drive/folders/1UuESoCLysownaLvgwpPyyxAZ5htyQEyr", "01.3-01-Affinity-Diagramming", "01.3-02-Empathy-Map", "01.3-03-User-Personas"]
        // }
        // resourceLink="https://docs.google.com/document/d/1BW24OJaV2WZrLBvS8u6G7-1skJ3tBJJYzIMcZtO6Azc/edit?usp=sharing"
        slidesLinks={[
          `https://docs.google.com/presentation/d/e/2PACX-1vRq6BbUCivbUNHWLzPJ94Z7f6CXVSfuodLkh-CHhH7L8cQhBw5jjICSjYhpNgthXK1ZjwY3CQQ03zL_/embed?start=true&loop=true&delayms=3000`,
          `https://docs.google.com/presentation/d/e/2PACX-1vS9Yvj734sVSntWOXYVtVCoGqrOsit40b9LQkQzMVNAqDT1-UaBcNdQq3tiy50dszABeBWzBP54TdzP/embed?start=true&loop=true&delayms=3000`
         
        ]}
        slideURL="https://drive.google.com/drive/folders/1G3oq0Rlr0y9v1L7hUGdgHyjq2QHQDxm3?usp=sharing"
        moduleChallenge="User story: In order to transform your research insights into meaningful next steps, you must know which tools will help you transform those insights. It’s time to put that user researcher hat back on and grab your user persona from last week. Your job is to use your user persona to create a problem statement, ideate on potential solutions, and then apply visual storytelling to create a narrative around the solution you’ve identified."
        challengeDeliverables="
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
      Iterations and feedback documentation"
        moduleChallengeLink="https://docs.google.com/document/d/12M9HK5Xt-0sBQPBWejF1XW9BQhE1NGjlLLf6Laq6k4U/edit#heading=h.e90ml85suxb3"
      />
    </ProtectedRoute>
  );
};

export default One;
