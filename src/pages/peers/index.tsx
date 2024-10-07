import Grid from '@mui/material/Grid'
import CardFacebook from "src/views/cards/CardFacebook";
import CircularProgress from '@mui/material/CircularProgress';
import React from "react";

const Peers = ()=>{
    const [studentState, setStudentState] = React.useState([])
  
//   if(typeof window !== 'undefined'){
              
//     if(localStorage.getItem("users")){
//       name =  JSON.parse(localStorage.getItem("users"))?.user?.name
//       email =  JSON.parse(localStorage.getItem("users"))?.user?.email
//       prevIndustry =  JSON.parse(localStorage.getItem("users"))?.user?.prevIndustry
//       motivation =  JSON.parse(localStorage.getItem("users"))?.user?.motivation
//       industry =  JSON.parse(localStorage.getItem("users"))?.user?.industry
//       hobby =  JSON.parse(localStorage.getItem("users"))?.user?.hobby
  
  
//     }
  
//   }

React.useEffect(()=>{
    async function students(){
        // https://uxui-msp-24.vercel.app
        const users = await fetch("https://uxui-msp-24.vercel.app/api/students")
        const res = await users.json()
        return res
    }
    
    students().then(users=>{
        setStudentState(users?.students)
    })

},[])

    return(
        <>
        <Grid container spacing={3} style={{justifyContent: "center !important", alignItems: "center !important"}}>{
          studentState?.length<=0 || !studentState  ?
           <Grid   item xs={12} sm={6} md={4}>
            <CircularProgress  color="primary" /></Grid> :
        [...new Set(studentState)].filter(({ email }, index)=>{
            return ![...new Set(studentState)].map(i=>i?.email.toLowerCase()).includes(email?.toLowerCase(), index + 1)}
    ).map((student:any, index)=>
        <Grid key={index} item xs={12} sm={6} md={4}>
    
        <CardFacebook portfolio={student.portfolio} prevIndustry={student.prevIndustry} industry={student.industry} hobbies={student.hobbies}name={student.name} motivation={student.motivation}  />
      </Grid>)}
        </Grid>
        </>
        
)
}

export default Peers