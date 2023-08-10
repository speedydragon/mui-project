import { Box } from "@mui/material";
import React from "react";
import FeedPost from "./FeedPost";


const Feed = () => {
  return (
    <Box flex={4}>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
    </Box>
  );
};

export default Feed;
