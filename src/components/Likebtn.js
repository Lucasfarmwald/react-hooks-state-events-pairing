import react, {useState} from "react";

function LikeBtn() {
    const [likes, setLikes] = useState(0);

    function handleLikes() {
        setLikes( () => likes +1 )
    }



    return(
        <div>
            
            <button onClick={handleLikes}>Like?</button>
            <p>{likes}</p>

            
        </div>
    )
}

export default LikeBtn