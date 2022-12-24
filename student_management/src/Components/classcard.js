import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import class_img from '../Assets/img/class_img.jpg';

export default function ClassCard({ classData }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={classData.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {classData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Coordinator :-</b> {classData.faculty_name}<br />
          <b>Room No :- </b> {classData.room_name}<br />
          <b>Floor :- </b> {classData.floor}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' className='btn_action'>View More</Button>
      </CardActions>
    </Card>
  );
}