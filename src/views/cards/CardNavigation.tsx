// @ts-ignore

// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

interface CardNavProps {
  moduleTitle?: string;
  activitiesHeader?: string;
  slidesLinks?: string[]; 
  slideURL?: string;
   moduleChallenge?: string; 
   moduleChallengeLink?: string; 
   day1Activities?: string[]; 
   day2Activities?: string[]; 
   day3Activities?: string[]; 
   resourceLink?: string; 
   activitiesLink?: string;
   challengeDeliverables?: string;
   glossaryTerms?: any
  }

const CardNavigation = ({moduleTitle, activitiesHeader,slidesLinks, slideURL, moduleChallenge, challengeDeliverables, moduleChallengeLink, day1Activities,day2Activities,day3Activities, resourceLink, activitiesLink,glossaryTerms}:CardNavProps) => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
<Typography variant='h5' sx={{ marginBottom: 2 }}>
              {moduleTitle}
            </Typography>
                <Card>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='card navigation example'>
          <Tab value='1' label='Activities' />
          <Tab value='2' label='Slides' />
          <Tab value='3' label='Module Challenge' />
          <Tab value='4' label='Glossary' />

        </TabList>
        <CardContent>
          <TabPanel value='1' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
             {activitiesHeader}
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              <b> <a target="_blank"rel="noreferrer" href={day1Activities && day1Activities[0]}> Day 1 Activities </a></b>
            {day1Activities && day1Activities.slice(1).map((act, index)=> <div key={index} className="flex items-center mb-4">
           <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
           <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {act}</label>
          </div>)}
          <br/>
          <b> <a target="_blank"rel="noreferrer" href={day2Activities && day2Activities[0]}>  Day 2 Activities </a></b>

            {day2Activities && day2Activities.slice(1).map((act, index)=> <div key={index} className="flex items-center mb-4">
           <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
           <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {act}</label>
          </div>)}
          <br/>
        
          <b> <a target="_blank"rel="noreferrer" href={day3Activities && day3Activities[0]}>  Day 3 Activities </a></b>
            {day3Activities && day3Activities.slice(1).map((act, index)=> <div key={index} className="flex items-center mb-4">
           <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
           <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {act}</label>
          </div>)}
          {/* <div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 1.1 Software Check Software Installation Resources
</label>
          </div>
          <div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 01.1-01-Proto-Personas
</label>
          </div>
          <div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 01.1-01.1-Proto-Persona-Template
</label>
          </div>
          <div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 01.1-02-Five-Whys-Method
</label>
          </div> */}

            </Typography>
            {/* <Button variant='contained' href={activitiesLink} target="_blank">Go to Activities</Button> */}
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
             This Week&apos;s Slides
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
                {slidesLinks && slidesLinks.map((slide, index)=><iframe key="index" width="50%"
    height="310px"src={slide}></iframe>)}
            </Typography>
            <Button onClick={
              ()=>window?.open(slideURL, '_blank')!.focus()
            } 
             variant='contained'>Go to Week&apos;s Slides</Button>
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0 }}>
            {/* <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header Three
            </Typography> */}
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
             {moduleChallenge}
            </Typography>
            
            <Typography variant='body1' sx={{ marginBottom: 4 }}>
             {challengeDeliverables}
            </Typography>
            
            <a target="_blank" rel="noreferrer" href={moduleChallengeLink}><Button variant='contained'> Go to Module Challenge Document</Button></a>
          </TabPanel>
          <TabPanel value='4' sx={{ p: 0 }}>
            {/* <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header Three
            </Typography> */}
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
             {moduleTitle} Glossary 
            </Typography>
          <ul>
            {glossaryTerms?.map(({term, definition}: {term: string; definition: string;})=>(
              <li>
                <b>{term}</b>
                <ul>
                  <li>
                    {definition}
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
            
    </>

  )
}

export default CardNavigation
