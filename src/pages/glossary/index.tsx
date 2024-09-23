import Grid from '@mui/material/Grid'
import CardFacebook from "src/views/cards/CardFacebook";
import CircularProgress from '@mui/material/CircularProgress';
import React from "react";
import {  TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Link from 'next/link';

const Glossary = ()=>{
    const [termState, setTermState] = React.useState<any>(null)

React.useEffect(()=>{
    async function students(){

        const terms = await fetch("https://bootcamp-pied.vercel.app/api/glossary/")

        const res = await terms.json()
        return res
    }
    
    students().then(terms=>{
        setTermState(terms)
    })

},[])

    return(
        <>
        {/* <Grid container spacing={3} style={{justifyContent: "center !important", alignItems: "center !important"}}>{
          termState?.length<=0 || !termState  ?
           <Grid   item xs={12} sm={6} md={4}>
            <CircularProgress  color="primary" /></Grid> :
        (termState||[])?.glossaryItems.map((student:any, index:any)=>
        <Grid key={index} item xs={12} sm={6} md={4}>
    
        <CardFacebook portfolio={student.portfolio} prevIndustry={student.prevIndustry} industry={student.industry} hobbies={student.hobbies}name={student.name} motivation={student.motivation}  />
      </Grid>)}
        </Grid> */}
       
        <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='center'>Topic</TableCell>
            <TableCell align='center'>Description</TableCell>
            <TableCell align='center'>Tag</TableCell>
            <TableCell align='center'>Resource</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {termState?.glossaryItems?.map((row: {name: string, topic: string, description: string, tag: string, resource: string}, i:any ) => (
            <TableRow key={i}> 
             <TableCell  align='left'>{row?.name}</TableCell>
             <TableCell  align='left'>{row?.topic}</TableCell>
             <TableCell  align='left'>{row?.description}</TableCell>
             <TableCell  align='left'>{row?.tag}</TableCell>
             <TableCell  align='left'><Link target='_blank' href={row?.resource} >{row?.resource}</Link></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
        
)
}

export default Glossary