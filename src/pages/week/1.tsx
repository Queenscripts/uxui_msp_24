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
      // day2Activities={["https://drive.google.com/drive/folders/1rt6m6ub_XBUBU-R1kpfAcaOkSQwjm4IM", "01.2-01-User-Interview", "01.2-01.1-User-Interview-Sample-Questions"]}
      // day3Activities={["https://drive.google.com/drive/folders/1UuESoCLysownaLvgwpPyyxAZ5htyQEyr", "01.3-01-Affinity-Diagramming", "01.3-02-Empathy-Map", "01.3-03-User-Personas"]}
      // resourceLink="https://docs.google.com/document/d/1BW24OJaV2WZrLBvS8u6G7-1skJ3tBJJYzIMcZtO6Azc/edit?usp=sharing"
      // slidesLinks={[
      //   `https://docs.google.com/presentation/d/e/2PACX-1vQzTNv58zSkp3Tqll1jXuI6-AIUHDXAm2ml93emy3BdJJoMT_vB3Nram6S7CzvGv-q3A_diB40RJMAD/embed?start=false&loop=false&delayms=3000`,
      //   `https://docs.google.com/presentation/d/e/2PACX-1vTr0xkDHE1JGsLpOtlPhNlP-D6LxSI8ipwPE7fP2k-9tpF0OGm4GfEVeZL76oZE5KWjHNSFsx67juPU/embed?start=false&loop=false&delayms=3000`,
      //   `https://docs.google.com/presentation/d/e/2PACX-1vTOZH7N5QZ9Ft45CK0bRvQznfrHjoeByAsnXwDblLCc5N5kkgglGGDU-vXP41YE_V3nRL8KghjQxHj-/embed?start=false&loop=false&delayms=3000`
      // ]} 
      slideURL="https://docs.google.com/presentation/d/10outQZYDj8-rlM8MQNiT4Yu4AMCiCcYFTcEg6kxzBok/edit?usp=sharing" 
      moduleChallenge='User story: This week, you’re a user researcher who wants to understand the pain points of how people plan to travel in the future, post-pandemic. You’ll conduct user tests in order to understand user pain points. From there, you’ll develop a user persona that draws from the affinity diagram and empathy map that you will also create.' 
      moduleChallengeLink='https://docs.google.com/document/d/1Y-RmkZT2_zdmeFePOthC0aqIjZpWJwGmp01ElUQ5HAE/edit'
    />
    </ProtectedRoute>
  )
}

export default One
