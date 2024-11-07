import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './EditPost.css'
import { supabase } from '../client'


const EditPost = ({ data }) => {
    const deletePost = async () => {
        await supabase
            .from("Crews")
            .delete()
            .eq('id', id);
        window.location = "http://localhost:3000/";
    }
    const updatePost = async (event) => {
        event.preventDefault();
        try {
            const {data,error} = await supabase
            .from("Posts")
            .update({ name: post.name, author: post.skills, description: post.personality })
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

    const {id} = useParams();
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""});

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
        <div>
            <form>
                <label htmlFor="title">Name</label> <br />
                <input type="text" id="title" name="title" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="author">Skills</label><br />
                <input type="text" id="author" name="author" value={post.skills} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Personality</label><br />
                <textarea rows="5" cols="50" id="description" value={post.personality} onChange={handleChange} >
                </textarea>
                <br />
                
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost