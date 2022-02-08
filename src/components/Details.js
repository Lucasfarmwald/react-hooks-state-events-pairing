import react from "react";

function Details(props) {
    return(
        <div>
           <td>{props.title}</td>
           <p>{props.views} | <span>{props.date}</span></p>

        </div>
    )
}

export default Details