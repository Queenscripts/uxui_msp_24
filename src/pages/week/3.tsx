import CardNavigation from "src/views/cards/CardNavigation";
import ProtectedRoute from "src/components/ProtectedRoute";
const One = () => {
      return (
            <ProtectedRoute>
                  <CardNavigation
                        glossaryTerms={[
                              {
                                    term: "Competitor analysis",
                                    definition:
                                          "an assessment of the strengths and weaknesses of competitors’ products and services in comparison to one’s own. Most designers use a spreadsheet to organize their competitor data, which they analyze for insights.",
                              },
                              {
                                    term: "Efficiency",
                                    definition: "how quickly a knowledgeable user can perform tasks.",
                              },
                              {
                                    term: "Errors",
                                    definition: "a measure of how many errors users make, how severe these errors are, and how easily they can recover from the errors.",
                              },
                              {
                                    term: "Guerrilla user testing",
                                    definition: "a method for gathering user feedback that involves taking a design or prototype to the public and asking people for feedback.",
                              },
                              {
                                    term: "Heuristic",
                                    definition: " a broad rule of thumb to follow when designing a user interface. Heuristic principles help designers identify usability issues in their prototypes.",
                              },
                              {
                                    term: "Iteration",
                                    definition: "the revision process, often ongoing, that is informed by the feedback of users, a design team, testing, and stakeholders.",
                              },
                              {
                                    term: "Learnability",
                                    definition: "how easily a first-time user can perform basic tasks.",
                              },
                              {
                                    term: "Memorability",
                                    definition: "how easily a user can re-establish proficiency after an interval.",
                              },
                              {
                                    term: "Onboarding",
                                    definition: "a process built into an app or site that increases the user’s likelihood of staying and exploring. The ideal onboarding user experience is frictionless, easy, and even delightful.",
                              },
                              {
                                    term: "Prototype",
                                    definition: " a rough version of an actual product. It is used to show how the final product will look and work. Prototypes enable designers to experience how the application flows and to test the usability and feasibility of the designs. Prototypes can be any fidelity you need—low to high fidelity.",
                              },
                              {
                                    term: "Satisfaction",
                                    definition: "is the measurement of how pleasant it is to use a design. Satisfaction can be measured through NPS, qualitative interviews, and product reviews.",
                              },
                              {
                                    term: "Success rate",
                                    definition: "the percentage of tasks that users complete correctly during user testing and usability testing.",
                              },

                              {
                                    term: "Task flow",
                                    definition: "a series of steps (“flow”) that users complete for a specific task. Task flows are similar to user flows, except they’re generally linear without multiple branches or paths. For example, all users would follow the same steps to complete that specific action, such as creating an account or going through a checkout process.",
                              },
                              {
                                    term: "Testing",
                                    definition: " a procedure for critical evaluation. The testing process entails developing a test plan, observing potential users try out a version or prototype of the product, recording the test, and then analyzing the results.",
                              },
                              {
                                    term: "UI design pattern",
                                    definition: "a reusable solution that designers employ. It’s best practice for designers to use UI design patterns as established solutions save time while solving common design problems.",
                              },
                              {
                                    term: "Usability testing",
                                    definition: "a technique to evaluate how easy a product or service is to use by testing it with real users. The goal of usability testing is to identify usability problems to resolve and ultimately satisfy users.",
                              },
                              {
                                    term: "User flow analysis",
                                    definition: "(sometimes called Task flow analysis) a diagram or visual representation that shows how users navigate through an application while performing a specific task.",
                              },
                              {
                                    term: "User flow diagram",
                                    definition: " the path a user follows through your website interface to complete a task (e.g., making a restaurant reservation, purchasing clothing, or subscribing to a meal kit service).",
                              },
                              {
                                    term: "UX metrics",
                                    definition: " the measures of UX performance (e.g., conversion rates, sales, registrations, satisfaction, recommendations, and ratings).",
                              },
                              {
                                    term: "UX writing",
                                    definition: " the words you see or hear in a product when you're using a product. Can be part of content strategy. The UX writer is responsible for all the text the user encounters when navigating around a product.",
                              },
                              {
                                    term: "Wireflow",
                                    definition: " a hybrid design document that combines wireframing with flow diagramming, indicating the paths a user may take while using the product.",
                              },
                              {
                                    term: "Wireframe",
                                    definition: "  a visual way for designers to translate user flows into a basic design of an app or site experience. Designers start the wireframing process with sketching on paper and then iterate from there into a digital wireframe",
                              },
                              
                        ]}
                        moduleTitle="Week 3: UX + Design Thinking: Prototyping"
                        activitiesHeader="Low-Fi Prototyping"
                        activitiesLink="https://drive.google.com/drive/folders/1n1adXMc_NxnVIjk9nnc9FrhxbVtLBKMj"
                        day1Activities={[
                              "https://drive.google.com/drive/folders/1pAc3fQ-bQopYKeCjPF2YX1xcZ0mqjkmT",
                              "3.1-01 Sandwich User Flow",
                              "3.1-02 Paper Prototyping",
                              "3.1-03 Usability Testing",
                        ]}
                        day2Activities={["https://drive.google.com/drive/folders/1oQO51aM-Qs3RfDJY7oZmOnB3c68BIVkL",
                        "03.2-01 Remote Usability Testing Plan","03.2-01 Remote Usability Testing Plan Template",
                        "03.2-02 Usability Testing", "03.2-03 Usability Testing Analysis", "03.2-03 UX Design Brief Template"]
                        }
                        // day3Activities={
                        //   ["https://drive.google.com/drive/folders/12AhtjEpI98FH-VlouEP7oVk5SCWlGX6d",
                        //   "3.3-01 Mini Case Study","3.3-01 Mini Case Study Outline Template"
                        // ]
                        // }

                        slidesLinks={[
                              `https://docs.google.com/presentation/d/e/2PACX-1vTcppUsSuE9nzlp936wlXI8EtJEYfaF2FeuWbuxhaFX38IM14lg4KEg5681IG0j2YhiJCnTfG6xvF__/embed?start=true&loop=true&delayms=3000`,
                               `https://docs.google.com/presentation/d/e/2PACX-1vQPWINXOz5f88_RstfHzeElxKw3XjJd2afr_0MfwNOiKzaMVnnr1b8U9xM646vB7lMx6qpboqHkW6nR/embed?start=true&loop=true&delayms=3000`,
                              //  `https://docs.google.com/presentation/d/e/2PACX-1vRbA6kApcXhGtoIFOM23Q2TlkKzkD-XYVcUPmYHiV9AROfy-c0bvys-p20wH8ofLOrxeAwZcAlvZHQT/embed?start=true&loop=true&delayms=3000`
                        ]}
                        slideURL="https://drive.google.com/drive/folders/1D-ttjMUtHtAlTseuwcAOLW2tRCQln1zH?usp=sharing"
                        moduleChallenge="User story: Last week, you worked as a UX researcher with the define and ideate phases of the design thinking process for the mobile app design challenge. 
      "
                        challengeDeliverables="
      Cover slide
Project overview
Note: Your cover slide can contain your project overview, or you can put your project overview on its own slide.
Include slides from Challenges 1 and 2 in your case study covering the design thinking process.
Empathize
Define
Ideate
Prototype
Test
User testing plan and notes
Links to two or more user test recordings
Clickable paper prototype
Analysis of your guerrilla user testing results


      "
                        moduleChallengeLink="https://docs.google.com/document/d/1WM594QTwHABI89m7iRx3QyEn_7dxRxTVBsfErImhFx4/edit"
                  />
            </ProtectedRoute>
      );
};

export default One;
