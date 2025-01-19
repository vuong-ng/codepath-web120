import {useState, useEffect} from 'react'
import { supabase } from '../client'
import Button from '@mui/material/Button';
import './CreatePost.css'
const CreatePost = (props) => {
    const createPost = async (event) => {
        event.preventDefault();
        try {
            const { data, error } = await supabase
                .from("Posts")
                .insert(
                    {
                        caption: post.caption,
                        author: post.author
                    }
                )
                .select();
            if (error) {
                throw (error);
            }
            console.log("Post created:", data)
            window.location = "/";
        } catch (error) {
            console.error('Error creating post: ', error.message)
        }
    }
    const [post, setPost] = useState({ id: "", caption: "", author: "", created_day: "" })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div id='create-main'>
            <form onSubmit={createPost} id='create-post-form'>
                <div id='create-header'>
                    {" "}
                    Create a new post
                    {" "}
                </div>
                <br />
                <label htmlFor="author">Author</label>
                <input type="text" name='author' onChange={handleChange} />
                <br />

                <label htmlFor="caption">Caption</label>
                <textarea type="text" name="caption" onChange={handleChange} />
                <br />

                <Button
                    type='submit'
                    variant='contained'
                    sx={{
                        backgroundColor: '#AF1740', // Custom background color
                        color: '#ffffff',          // Text color
                        '&:hover': {
                          backgroundColor: '#740938', // Hover color
                        },
                      }}
                    
                >
                    Submit
                </Button>
                
            </form>
        </div >
    )
}

export default CreatePost;