import video from "../data/video.js";
import Comments from "./Comments.js";
import LikeBtn from "./Likebtn.js";
import DislikeBtn from "./Dislikebtn.js";
import Details from "./Details.js";
import { createPortal } from "react-dom";


function App() {
  console.log("Here's your data:", video);

let commentOne = video.comments[1].comment
let commentZero = video.comments[0].comment
let userOne = video.comments[1].user
let userZero = video.comments[0].user

function hideComments() {
  
}

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"

      />
      <Details title={video.title} views={video.views} date={video.createdAt} />
      <LikeBtn upvotes={video.upvotes} />
      <DislikeBtn downvotes={video.downvotes} />
      <Comments  userZero={userZero} userOne={userOne} comments={commentOne} commentZero={commentZero} />
    </div>
  );
}

export default App;
