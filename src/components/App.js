import video from "../data/video.js";
import Comments from "./Comments.js";
import LikeBtn from "./Likebtn.js";
import DislikeBtn from "./Dislikebtn.js";
import Details from "./Details.js";


function App() {
  console.log("Here's your data:", video);

  

  

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
      <Details title={video.title} views={video.views}  />
      <Comments  />
      <LikeBtn upvotes={video.upvotes} />
      <DislikeBtn downvotes={video.downvotes} />
    </div>
  );
}

export default App;
