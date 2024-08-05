
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const regionData=[
    {
        id:1,
        name:'I’m flexible',
        imageUrl:'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320'
    },
    {
        id:2,
        name:"South East Asia",
        imageUrl:'https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320'
    },
    {
        id:3,
        name:'Thailand',
        imageUrl:'https://a0.muscache.com/im/pictures/924d2b73-6c65-4d04-a2ad-bbc028299658.jpg?im_w=320'
    },
    {
        id:4,
        name:'Europe',
        imageUrl:'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320'
    },
    {
        id:5,
        name:'Indonesia',
        imageUrl:'https://a0.muscache.com/im/pictures/ebc5a343-8b76-4ae5-8700-eb5e9cec9243.jpg?im_w=320'
    },
    {
        id:6,
        name:'United States',
        imageUrl:'https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320'
    }
]

export default function SearchByDestination() {
    return (
        <>
            {/* search destination component  */}
            <Paper elevation={2}  sx={{width:'480px' , height:'480px',position:'absolute' , left:"17%" , top:"100%",borderRadius:'30px', padding:"20px 25px 10px 20px"}}>

                <Typography variant='h2'  sx={{fontWeight:'bold', fontSize:'15px' , fontFamily:'sans-serif',marginBottom:'-10px',marginLeft:'6%',marginTop:'3%'}}>Search by region</Typography>



                <Box sx={{width:'100%', height:'90%', display:'grid',gridTemplateColumns:'repeat(3,1fr)',padding:'20px',gridGap:'5px 10px',

                }} mt={2} >
                    {
                        regionData.map((region)=>(
                            <Grid item key={region.id} sx={{width:'100%', height:'100%', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px', padding:'10px',
                                "&:hover":{
                                    cursor:'pointer',
                                    backgroundColor:'#f7f7f7',
                                }}}>
                                <Avatar sx={{width:'100%' , height:'80%', borderRadius:'9px', '&:hover':{
                                        outline:'0.1px solid gray'
                                    }}} variant='rounded' src={region.imageUrl} alt={region.name}/>
                                <Typography variant='h2' sx={{fontSize:'15px'}}>{region.name}</Typography>
                            </Grid>
                        ))
                    }

                </Box>
            </Paper>
        </>
    )
}
