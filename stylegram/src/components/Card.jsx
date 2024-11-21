import "./Card.css"
import { Link } from 'react-router-dom'
const Card = ({ id, caption, created_day, author,likes,comments }) => {
  const date = new Date(created_day);
  const shortDate = date.toLocaleDateString();
  console.log(likes);
    return (
      <div className="card">
        <div>{" "}</div>
          <div className="card-header">
            <div className="author">{author}</div>
          <div className="created-days">{shortDate} </div>
          <button className="like-button"></button>
          <button className="edit-button"><Link to={"/edit/"+id}>...</Link></button>
      
            {/* <div className="id">{id}</div> */}
          </div>
      <div className="card-content">
        <p>{caption}</p>
        </div>
        <div className="card-footer">
          <button className="like-button">
            <p>Like</p>
            <span>{likes}</span>
          </button>
          <button className="comment-button">
            <p>Comment</p>
            <span>{comments?.length}</span>
            </button>
            <button className="details-button"><Link to={"/"+id}>Details</Link></button>
        </div>
    </div>
    )
}
export default Card;
