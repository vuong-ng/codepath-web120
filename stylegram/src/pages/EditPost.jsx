import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../components/Card'
import { Button } from "@mui/material";
import './EditPost.css';
import { supabase } from '../client';

const EditPost = ({ data }) => {
    const { id } = useParams();
    const [post, setPost] = useState([data[0]]);
    console.log(data[0])
    const deletePost = async () => {
        await supabase
            .from("Posts")
            .delete()
            .eq('id', id);
        window.location = "/";
    };
    const updatePost = async (event) => {
        event.preventDefault();
        try {
            const {data,error} = await supabase
            .from("Posts")
            .update({ author: post.author, caption: post.caption })
            .eq('id', id);
            if (error) {
                throw error;
            }

            console.log('Post created:', data);
            window.location = "/";
        } catch (error) {
            console.error('Error creating post:', error.message);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    return (
        <div className="form-container">
            <form>
                <div id="edit-post-header">
                    <p>Edit Post</p>
                </div>
                <br />
                <label htmlFor="author">Name</label> <br />
                <input type="text" id="author" name="author"
                    value={post.author}
                    onChange={handleChange} />{post.author}<br />

                <label htmlFor="caption">Caption</label><br />
                <textarea rows="5" cols="50" name="caption"
                    value={post.caption}
                    onChange={handleChange} >
                    {post.caption}
                </textarea>
                <br />
                
                <Button
                    type="submit"
                    value="Submit"
                    onClick={updatePost}
                    variant="outlined"
                    className="submitButton">Submit</Button>
                <Button
                    variant="contained"
                    className="deleteButton"
                    onClick={deletePost}>Delete</Button>
            </form>
        </div>
    )
}

export default EditPost;