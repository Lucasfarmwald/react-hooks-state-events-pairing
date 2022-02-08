import react, {useState} from "react";

function DislikeBtn() {
    const [dislike, setDislike] = useState(0)

    function handleDislike() {
      setDislike(dislike + 1)
    }

    return(
        <div>
            <button onClick={handleDislike} >Dislike?</button>
            <p>{dislike}</p>
        </div>
    )
}

export default DislikeBtn