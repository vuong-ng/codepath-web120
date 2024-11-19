import { supabase } from "../client";
import { useState, useEffect } from "react";
import Card from "../components/Card";

const HomeFeed = (props) => {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const { data, error } = supabase
    //             .from("Posts")
    //             .select()
    //             .order('created_at', { ascending: true })
    //         if (error) {
    //             console.log(error);
    //         }
    //         setPosts(data);
    //     }
    //     fetchPosts();
    // }, []);
    // setPosts(data);
    // console.log(data);
    // useEffect(() => {
    //     setPosts(props.data);
    //     console.log(posts.length)
    // }, [props]);
    console.log(posts.length);
    return (
        <div className="HomeFeed">
            {
                posts && posts.length > 0 ?
                    posts.map((post, index) =>
                        <Card
                            key={index}
                            id={post.id}
                            caption={post.caption}
                            created_days={post.created_at}
                            author={post.author}
                        >
                        </Card>
                    ) : <h1>No post has been created yet! </h1>
            
            }
    </div>
    )
}

export default HomeFeed;