import React from "react";
import "../css/Post.css";
import { Avatar, Grid, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, description, message, photoUrl, setPosts }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>Message goes here</p>
      </div>

      <div className="post__buttons">
        <Grid container spacing={4} mt={2} fullWidth>
          <Grid item xs={3}>
            <Button
              startIcon={<ThumbUpIcon />}
              variant="text"
              size="small"
              onClick={() => setPosts(["post"])}
            >
              Like
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button startIcon={<CommentIcon />} variant="text" size="small">
              Comment
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button startIcon={<ShareIcon />} variant="text" size="small">
              Share
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button startIcon={<SendIcon />} variant="text" size="small">
              Send
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Post;
