import "./Card.css"
import { useState } from "react";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import menuDots from '../assets/menuDots.svg'
import heart from '../assets/heart.svg'
import { supabase } from '../client';
const Card = ({ id, caption, created_day, author, likes, comments }) => {
  const date = new Date(created_day);
  const initializeComments = (comments) => {
    return comments || [];
  }
  let initialComments = initializeComments(comments);
  const shortDate = date.toLocaleDateString();
  const [currLikes, setLikes] = useState(likes);
  const [currComments, setCurrComments] = useState(initialComments);
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleAddComment = async (e) => {
    e.preventDefault();
    console.log("new comment", e.target.elements['add-comment'].value);
    console.log("existing comments", currComments)
    const newComment = e.target.elements['add-comment'].value;
    if (!newComment.trim()) return;
    try {
      if (currComments) {
        const { data, error } = await supabase
          .from("Posts")
          .update({ comments: [...currComments, newComment] })
          .eq('id', id);
      } else {
        const { data, error } = await supabase
          .from("Posts")
          .update({ comments: [newComment] })
          .eq('id', id);
      }
      
    } catch(error) {
      console.log(error.message);
    }
    setCurrComments([...currComments, newComment]);
    setCommentText("");
  }

  const handleLikeClick = () => {
    likes++;
    setLikes(likes);
  }
  const handleCommentClick = () => {
    setShowCommentSection(!showCommentSection);
  }


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
            {currLikes} people likes this post</div>
          <div className="comments-total">
            {currComments?.length} comments
          </div>
        </div>


        <div className="card-footer">
          <button className="like-button"
          onClick={handleLikeClick}>
            <p>Like</p>
          </button>
          <button
            className="comment-button"
          onClick={handleCommentClick}>
            <p>Comment</p>
            </button>
            <button className="details-button"><Link to={"/"+id}>Details</Link></button>
        </div>

        
          {showCommentSection && currComments?.length > 0 && (
            <div id="feed-comment-list">
              {currComments.map((comment, index) => (
                 <div key={index} id="feed-post-comment">
                 {comment}
               </div>
              ))}
            </div>
            )
        }
        
        {showCommentSection && (
          <form onSubmit={(e) => handleAddComment(e)} className="add-comment">
          <label htmlFor={`add-comment-${id}`}>Add Comment</label><br />
          <textarea
            id={`add-comment-${id}`}
            name='add-comment'
            rows="3"
            cols="50"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <Button
            type="submit"
            variant="contained">
            Send</Button>
        </form>
        )}

        
        {/* </div> */}
    </div>
    )
}
export default Card;
