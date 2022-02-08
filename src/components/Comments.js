import react, {useState} from "react";


function Comments(props) {

    const [comments, setComments] = useState(props.commentZero,props.comments)
    
    function handleComments() {
        setComments(() => comments === "")
    }

    return(
        <div>
        <button onClick={handleComments} >Hide Comments</button>
           
        <p>{props.userOne}</p>
        <p>{props.comments}</p>
        <br></br>
        <p>{props.userZero}</p>
        <p>{props.commentZero}</p>
        
           
        </div>
    )
}

export default Comments