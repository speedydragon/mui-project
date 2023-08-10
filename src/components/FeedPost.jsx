import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const FeedPost = () => {
  return (
    <>
      <Card sx={{margin:3}}>
        <CardHeader
          avatar={<Avatar sx={{backgroundColor:'red'}} aria-label="recipe">J</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="James Winston Morris"
          subheader="September 14, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2023/02/20/3e9b6907-e18e-4b11-ad9c-9374d85df064_bf6828f8.jpg?itok=paw3Dnfp&v=1676886500"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            All-new iMac features stunning design in a spectrum of vibrant
            colors, the breakthrough M1 chip, and a brilliant 4.5K Retina
            display. iMac offers the best camera, mics, and speakers ever in a
            Mac, and Touch ID for the first time
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default FeedPost;
