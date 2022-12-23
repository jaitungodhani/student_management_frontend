import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import class_img from '../Assets/img/class_img.jpg';

export default function ClassCard() {
    const class_data = [{

    }];
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={class_img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Class 1-A
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Room No :- 1 <br />
          floor :- 1 <br />
          class coordinator :- 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}