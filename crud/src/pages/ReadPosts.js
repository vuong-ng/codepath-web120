import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import {supabase} from '../client'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from('Crews')
                .select()
                .order('created_at', { ascending: true })

                // set state of posts
                setPosts(data);
        }
        setPosts(props.data);
        fetchPost();
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card name={post.name} skills={post.skills} personality={post.personality}/>
                ) : <h2>{'No Crewmate Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;