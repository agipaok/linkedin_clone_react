import React, { useState } from "react";
import "../css/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import { Photo } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();

    setPosts([...posts]);
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a post" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#57a1ebff" />
          <InputOption
            Icon={OndemandVideoOutlinedIcon}
            title="Video"
            color="#d36014ff"
          />
          <InputOption
            Icon={CalendarMonthOutlinedIcon}
            title="Event"
            color="#6393c2ff"
          />
          <InputOption
            Icon={AssignmentOutlinedIcon}
            title="Write article"
            color="#be7632ff"
          />
        </div>
      </div>

      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Agi Chatzi"
        description="Description"
        message="Message goes here"
        photoUrl=""
      />
    </div>
  );
}

export default Feed;
