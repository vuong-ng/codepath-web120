import React from 'react';
import {useState} from 'react'
import './CreatePost.css'
import { supabase } from '../client';

const CreatePost = () => {
    // const createPost = async (event) => {
    //     event.preventDefault();
    //     try {
    //         await supabase
    //             .from('Posts')
    //             .insert([{
    //                 title: post.title,
    //                 author: post.author,
    //                 description: post.description,
    //             }])
    //             .select()
    //         window.location = "/";
    //     } catch (error) {
    //         console.error();
    //     }
    // }
    const createPost = async (event) => {
        event.preventDefault();
        try {
            const { data, error } = await supabase
                .from('Crews')
                .insert({
                     name: post.name,
                    skills: post.author,
                    personality: post.personality,
                })
                .select();

            if (error) {
                throw error;
            }

            console.log('Post created:', data);
            window.location = "/";
        } catch (error) {
            console.error('Error creating post:', error.message);
        }
    };
    const [post, setPost] = useState({title: "", author: "", description: ""})

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
            <form onSubmit={createPost}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="skills">Skills</label><br />
                <input type="text" id="skills" name="skills" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="personality">Personality</label><br />
                <textarea rows="5" cols="50" id="personality" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost;