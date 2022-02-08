import react, {useState} from "react";

function DislikeBtn(props) {
    const [dislikes, setDislike] = useState(props.downvotes)

function handleDislike() {
      setDislike(dislikes + 1)
}

    return(
        <div>
            <button onClick={handleDislike} >Downvote</button>
            <p>{dislikes}</p>
            
        </div>
    )
}

export default DislikeBtn