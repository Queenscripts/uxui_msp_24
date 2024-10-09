import CardNavigation from 'src/views/cards/CardNavigation'
import ProtectedRoute from 'src/components/ProtectedRoute'
const One = () => {
  return (
    <ProtectedRoute>
          <CardNavigation 
      moduleTitle='Week 1: Introduction to UX Design: Empathy Phase ' 
      activitiesHeader="User Research +" 
      day1Activities={[
        "https://drive.google.com/drive/folders/120XX0CZ-3juHAakyFJFQmeDc7ksfreyh?ths=true",
        "1.1 Software Check Software Installation Resources", 
        "1.1-02 Proto-Personas", 
        "1.1-03 Practice Interview",
        "01.1-02-Five-Whys-Method"]}
      day2Activities={["https://drive.google.com/drive/folders/1nHtnuNNGK8sb5um8drhC7XiW28iEh8BD?ths=true", 
        "1.2-01 Research Objectives", 
        "1.2-01 Research Objectives Template",
        "1.2-02 Interview Questions",
        "1.2-02 Discussion Guide",
        "1.2-03 User Interview Practice"
      ]}
      day3Activities={[
      "https://drive.google.com/drive/folders/1TFJC5bC6PNB0h78Ux0MQbU3eyfkHxZc2?ths=true", 
      "01.3-01-Affinity-Diagramming", 
      "01.3-02-Empathy-Map", 
      "01.3-03-User-Personas"]}
      // resourceLink="https://docs.google.com/document/d/1BW24OJaV2WZrLBvS8u6G7-1skJ3tBJJYzIMcZtO6Azc/edit?usp=sharing"
      slidesLinks={[
        `https://docs.google.com/presentation/d/10outQZYDj8-rlM8MQNiT4Yu4AMCiCcYFTcEg6kxzBok/embed?start=true&loop=true&delayms=3000`,
        `https://docs.google.com/presentation/d/1ExsdCGVw-8O7hBcR5UU0pZL5H_iC1Vr6z8PP2NmwwC8/embed?start=true&loop=true&delayms=3000`,
        `https://docs.google.com/presentation/d/1fp-N9i92piyv4Fkff9Q-mmEwBvb1uOYa_WLouaWHbfQ/embed?start=false&loop=false&delayms=3000`,
        // `https://docs.google.com/presentation/d/e/2PACX-1vTOZH7N5QZ9Ft45CK0bRvQznfrHjoeByAsnXwDblLCc5N5kkgglGGDU-vXP41YE_V3nRL8KghjQxHj-/embed?start=false&loop=false&delayms=3000`
      ]} 
      slideURL="https://drive.google.com/drive/folders/15hkxQvgh-Y6gWYYGXJvwqnG5glojJq5S?usp=sharing" 
      moduleChallenge='Over the next three modules, you will create a case study that will go in your design portfolio. The Module 1 Challenge is the first set of deliverables as you work through directly applying the stages of design thinking.' 
      moduleChallengeLink='https://docs.google.com/document/d/1Y-RmkZT2_zdmeFePOthC0aqIjZpWJwGmp01ElUQ5HAE/edit'
      glossaryTerms={[
        {
              term: "Affinity diagramming",
              definition:
                    " a method that can help you gather large amounts of data and organize them into groups or themes based on their relationships.",
        },
 
        
  ]}
    />
    </ProtectedRoute>
  )
}

export default One
