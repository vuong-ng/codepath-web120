import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../components/Card'
import './EditPost.css'
import {supabase} from '../client'

const EditPost = ({ data }) => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const deletePost = async () => {
        await supabase
            .from("Posts")
            .delete()
            .eq('id', id);
        window.location = "http://localhost:3000/";
    }
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
                <label htmlFor="author">Name</label> <br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br/>

                {/* <label htmlFor="caption">Skills</label><br />
                <input type="text" name="caption" value={post.caption} onChange={handleChange} /><br />
                <br/> */}

                <label htmlFor="caption">Caption</label><br />
                <textarea rows="5" cols="50"  name="caption" value={post.caption} onChange={handleChange} >
                </textarea>
                <br />
                
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;