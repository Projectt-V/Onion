import React, { useState,useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { ProfileHoverContainer } from '../styles/ProfileHoverStyle';

function ProfileHover() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
        setLoading((e) => !e);
      };
  const BtnStyle = {
    width:"10vw",
    background:"linear-gradient(225deg, #F16648, #C1005B)",
    fontSize:"12px",
    height:'30px',
    fontWeight:"bold",
    color:"#fff",
    paddingLeft:"10px",
    paddingRight:"10px",
    textTransform:"lowercase"
    };    
  return (
    <ProfileHoverContainer>
    
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
            R
          </Avatar>
        }
        
        title="people_call_me_eruma"
        subheader="follwed by fair_love_subin"
      />
      <CardContent>
         <Grid container spacing={3}>
            <Grid item xs={4}>
                <h5>Post</h5>
                <p>100</p>
            </Grid>
            <Grid item xs={4}>
                 <h5>Followers</h5>
                 <p>300</p>
            </Grid>
            <Grid item xs={4}>
                 <h5>Following</h5>
                 <p>1000</p>
            </Grid>
         </Grid>
       
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" style={BtnStyle}>
          Message
        </Button>
        <Button onClick={handleClick} sx={{ m: 2 }} style={BtnStyle}>
            {loading ? 'Following' : 'Follow'}
        </Button>
      </CardActions>
      
    
    </ProfileHoverContainer>
  )
}

export default ProfileHover