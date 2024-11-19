import {useState, useEffect} from 'react'
import { supabase } from '../client'
import './CreatePost.css'
const CreatePost = (props) => {
    const createPost = async (event) => {
        event.preventDefault();
        try {
            const { data, error } = await supabase
                .from("Posts")
                .insert([
                    {
                        id: post.id,
                        caption: post.caption,
                        author: post.author,
                        created_day: post.created_day
                    }
                ])
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
        <div className='main'>
            <form onSubmit={createPost}>
                <label htmlFor="author">Author</label>
                <input type="text" name='author' onChange={handleChange} />
                <br />

                <label htmlFor="caption">Caption</label>
                <input type="text" name="caption" onChange={handleChange} />
                <br />

                {/* <label htmlFor=""></label>
                <input type="text" name='caption' onChange={handleChange} />
                <br /> */}

                <input type="submit" value='submit' />
                
            </form>
        </div >
    )
}

export default CreatePost;