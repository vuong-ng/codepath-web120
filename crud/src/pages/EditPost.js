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
            .from("Crews")
            .update({ name: post.name, skills: post.skills, personality: post.personality })
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
    const [post, setPost] = useState({id:null,name: "", skills: "", personality: ""});

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
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="skills">Skills</label><br />
                <input type="text" id="skills" name="skills" value={post.skills} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="personality">Personality</label><br />
                <textarea rows="5" cols="50" id="personality" name="personality" value={post.personality} onChange={handleChange} >
                </textarea>
                <br />
                
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;