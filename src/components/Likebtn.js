import react, {useState} from "react";

function LikeBtn(props) {
    const [likes, setLike] = useState(props.upvotes)

function handleLikes() {
       setLike( () => likes + 1)     
}
    return(
        <div>
            <button onClick={handleLikes}>Upvote</button>
            <p>{likes}</p>
        </div>
    )
}

export default LikeBtn