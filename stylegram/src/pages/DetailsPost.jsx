import React from 'react';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './DetailsPost.css'
import { supabase } from '../client'
import heart from '../assets/heart.svg'
import Button from '@mui/material/Button';
const DetailsPost = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    console.log(id);

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#AF1740',
        color: '#ffffff',
        '&:hover': {
          backgroundColor: '#740938',
        },
      }));

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from("Posts")
                .select('*')
                .eq('id', id);
            if (error) {
                console.log(error);
            }
            setPost(data[0]);
            console.log(data[0]);
        };

        fetchPost();
    }, [id]);
    console.log(post)


    const handleLike = async (event) => {
        event.preventDefault();
        const updatedLikes = post.likes++;
        setPost((prevPost) => ({
            ...prevPost,
            likes: updatedLikes,
          }));
        try {
            const {data,error} = await supabase
            .from("Posts")
            .update({ likes:updatedLikes})
            .eq('id', id);
            if (error) {
                throw error;
            }

            console.log('Post created:', data);
            setPost(post);
            // window.location = "/";
        } catch (error) {
            console.error('Error creating post:', error.message);
        }
    }
    const updateComments = async (event) => {
        event.preventDefault();
    const updatedComments = [...post.comments, newComment];
    setPost((prevPost) => ({
      ...prevPost,
      comments: updatedComments,
    }));

    try {
      const { data, error } = await supabase
        .from("Posts")
        .update({ comments: updatedComments })
        .eq('id', id);
      if (error) {
        throw error;
      }
        setNewComment("");
    } catch (error) {
      console.error('Error adding comment:', error.message);
    }
    };

    const [newComment, setNewComment] = useState("");

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    }
    return (
    <div id="background">
        <div className='container'>
            <div className="post-container">
            <h1 className="post-author">{post.author}</h1>
            <p className="post-time">{new Date(post.created_at).toLocaleString()}</p>
            <p className="post-caption">{post.caption}</p>
            <div className="post-footer">
                <div className="post-likes">
                <button id='like-button' onClick={handleLike}> <img src={heart} width={'17px'} /> {post.likes}</button>
                </div>
            <div className="comments-section">
                <h2>Comments</h2>
                <ul className="comments-list">
                {post.comments?.map((comment, index) => (
                    <li key={index} id='comment'>{comment}</li>
                ))}
                </ul>
                <form >
                <textarea
                    type="text"
                    onChange={handleCommentChange}
                                    placeholder="Add a comment"
                                    value={newComment}
                ></textarea>
                                <CustomButton
                                    variant='contained'
                                    type="submit"
                                    onClick={updateComments}
                                    sx={{
                                        backgroundColor: '#AF1740', // Custom background color
                                        color: '#ffffff',          // Text color
                                        '&:hover': {
                                          backgroundColor: '#740938', // Hover color
                                        },
                                      }}>
                                    Submit</CustomButton>
                </form>
            </div>
            </div>
    </div>
            </div>
            </div>
    )
}

export default DetailsPost;