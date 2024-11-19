import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../components/Card'
// import './EditPost.css'
import {supabase} from '../client'

const EditPost = ({ data }) => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(data);
    },[]);
    return (
        <div className="HomeFeed">
            {
                posts && posts.length > 0 ?
                    posts.map((post, index) =>
                        <Card
                            key={index}
                            id={post.id}
                            caption="here"
                            created_days={post.created_at}
                            author={post.author}
                        >
                        </Card>
                       
                    ) : <h1>No need to edit! </h1>
            }
    </div>
    )
}

export default EditPost;