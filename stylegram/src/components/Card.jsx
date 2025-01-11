import "./Card.css"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import menuDots from '../assets/menuDots.svg'
import heart from '../assets/heart.svg'
const Card = ({ id, caption, created_day, author, likes, comments }) => {
  const date = new Date(created_day);
  const shortDate = date.toLocaleDateString();
  console.log(likes);
    return (
      <div className="card">
        <div>{" "}</div>
        <div className="card-header">
          <div id="post-info">
            <div className="author">{author}</div>
            <div className="created-days">{shortDate} </div>
          </div>
            
          <div id="post-buttons">
            <Button
              id="Button"
              variant="text"><Link to={"/edit/" + id}> <img src={menuDots} alt="" width="30" height="30"/></Link></Button>
          </div>

          </div>
      <div className="card-content">
        <p>{caption}</p>
        </div>
        <div className="card-reactions">
          <div className="likes-total">
            <img src={heart} alt="" width="15" height="15"/>
            {likes} people likes this post</div>
          <div className="comments-total">
            {comments} comments
          </div>
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
