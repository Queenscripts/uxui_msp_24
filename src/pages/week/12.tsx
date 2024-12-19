import CardNavigation from 'src/views/cards/CardNavigation'
import ProtectedRoute from 'src/components/ProtectedRoute'
import React from 'react'
const One = () => {
  return (
    <ProtectedRoute>
      <CardNavigation
        moduleTitle='Week 12: Atomic Design'
        activitiesHeader="Design Systems & Responsive Web Design"
        activitiesLink=""
        day1Activities={[
          "https://drive.google.com/drive/folders/1Gk6DsAKDsGSPe6BXk1ftEbvsb8TT5W5a",
          "12.1-01 Atomic Design Puzzle",
          "12.1-02 Build an Organism",
          "12.1-03 Website Wireframes",
          "12.1-04 Material Design Mockups",
        ]}
        day2Activities={[
          "https://drive.google.com/drive/folders/1QZQEGx_kPlcl8-02g6nk1eOxzYI5_1fz",
          "12.2-01 Multistate UI Buttons",
          "12.2-02 UI Form Paper Prototype",
          "12.2-03 Mobile UI Form Prototype"
        ]
        }
        day3Activities={[
          "https://drive.google.com/drive/folders/1jRX1qI-sJZ5P8GddsjHiy26okN7E0Fh-",
          "12.3-01 RWD Figma Layout",
          "12.3-02 RWD Navigation",
          "12.3-03 RWD Navigation Testing",
          "12.3-04 RWD Landing Page"
        ]
        }
        slidesLinks={[
          `https://docs.google.com/presentation/d/e/2PACX-1vTVliCQW6_TVOxBtEGt0BJXBVOI6fU8KuLiFnkzMPZ9ET_A8Po0XoNo3FXMJ5XnNQi4eBF4Mhama_0d/embed?start=true&loop=true&delayms=5000`,
          `https://docs.google.com/presentation/d/e/2PACX-1vSrxBvDUwjiQIbjvnqN2wbPYgvurm-dfSNm4Wg8kffRZZuE4WH_jKbcRseyzLf3aBFJiTia8V9ZFU-k/embed?start=true&loop=true&delayms=5000`,
          `https://docs.google.com/presentation/d/e/2PACX-1vRY5Syuh075MpXGXaV5FE1c-HJ59pUIs1Ams0sbJX_sc4njkhzxVEwnVyLz8Y61kBIndxXd7LSK-ZPz/embed?start=true&loop=true&delayms=5000`
        ]}
        slideURL="https://drive.google.com/drive/folders/1A-7_c4q1ZOgp_-sEU7LfHGP3XiPtyq05?usp=sharing"

      />
    </ProtectedRoute>

  )
}

export default One
