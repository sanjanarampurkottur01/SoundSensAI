import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import surprisedSvg from '../static/surprised.svg';
import happySvg from '../static/surprised.svg';
import angrySvg from '../static/angry.svg';
import fearSvg from '../static/scared.svg';
import sleepingSvg from '../static/sleeping.svg';
import calmSvg from '../static/calm.svg';
import excitedSvg from '../static/excited.svg';
import loveSvg from '../static/love.svg';
import sadnessSvg from '../static/sadness.svg';

function ImageCard({ emotion, description }) {
  const imageUrl = (emotion) => {
    switch(emotion) {
      case "Happy":
        return happySvg
      case "Anger":
        return angrySvg
      case "Fear":
        return fearSvg
      case "Surprise":
        return surprisedSvg
      case "Sleepy":
        return sleepingSvg
      case "Love":
        return loveSvg
      case "Excitement":
        return excitedSvg
      case "Sadness":
        return sadnessSvg
      case "Calmness":
        return calmSvg
      default:
        return calmSvg
    } 
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl(emotion)}
        title="Emotion Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {emotion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">PLAYLIST</Button>
        <Button size="small">SONGS</Button>
      </CardActions>
    </Card>
  );
}

export default ImageCard;