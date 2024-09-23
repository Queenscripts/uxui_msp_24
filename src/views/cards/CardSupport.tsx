// ** MUI Imports
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// ** Icons Imports
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import router from 'next/router'

const CardSupport = ({title, description, link, image}:{title: string; description: string[]; link: string; image: string;}) => {
  return (
    <Card style={{margin:"10% 0"}}>
      <CardContent
        sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
        }}
      >
        {/* <Avatar
          sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: 'primary.main' }}
        >
          <HelpCircleOutline sx={{ fontSize: '2rem' }} />
        </Avatar> */}
        <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
          {/* Support */}
          {title}
        </Typography>
        </CardContent>
        <CardMedia sx={{ height: '14.5625rem' }} image={image}/>

<CardContent>

        {/* <Typography style={{textAlign:"left"}} variant='body2' sx={{ marginBottom: 6 }}> */}
          {/* According to us blisters are a very common thing and we come across them very often in our daily lives. It is
          a very common occurrence like cold or fever depending upon your lifestyle. */}
         <ul style={{textAlign:"left"}}>
          {
          
          description?.map((item, index)=>
            <li key={index}>
              {item}
            </li>
          )
          
          }
                   </ul>

        {/* </Typography> */}
        <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }} onClick={()=>router.replace(link)}>
          {/* Contact Now */}
          Read more
        </Button>
      </CardContent>

    </Card>
  )
}

export default CardSupport
