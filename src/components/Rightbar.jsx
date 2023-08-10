import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} sx={{ mt: 2, mb: 2 }}>
          Online Friends
        </Typography>

        <AvatarGroup max={7} sx={{ marginTop: 1 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />
          <Avatar
            alt="Travis Howard"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />
          <Avatar
            alt="Travis Howard"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} sx={{ mt: 2, mb: 2 }}>
          Latest Images
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              alt=""
              src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2023/02/20/3e9b6907-e18e-4b11-ad9c-9374d85df064_bf6828f8.jpg?itok=paw3Dnfp&v=1676886500"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2023/02/20/3e9b6907-e18e-4b11-ad9c-9374d85df064_bf6828f8.jpg?itok=paw3Dnfp&v=1676886500"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2023/02/20/3e9b6907-e18e-4b11-ad9c-9374d85df064_bf6828f8.jpg?itok=paw3Dnfp&v=1676886500"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2023/02/20/3e9b6907-e18e-4b11-ad9c-9374d85df064_bf6828f8.jpg?itok=paw3Dnfp&v=1676886500"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2023/02/20/3e9b6907-e18e-4b11-ad9c-9374d85df064_bf6828f8.jpg?itok=paw3Dnfp&v=1676886500"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2023/02/20/3e9b6907-e18e-4b11-ad9c-9374d85df064_bf6828f8.jpg?itok=paw3Dnfp&v=1676886500"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} sx={{mt:2}}>
          Latest Conversation
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard"/>
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker"/>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  );
};

export default Rightbar;
