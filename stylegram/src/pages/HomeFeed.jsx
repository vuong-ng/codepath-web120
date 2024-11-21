import { supabase } from "../client";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import "./HomeFeed.css"

const HomeFeed = (props) => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = searchTerm
  ? posts.filter((post) =>
      post.caption.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : posts;
    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from("Posts")
                .select()
                .order('created_at', { ascending: true })
            if (error) {
                console.log(error);
            }
            setPosts(data);
            console.log(data)
        }
        fetchPosts();
    }, []);
    console.log(posts.length);
    return (
        <div className="HomeFeed">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      {filteredPosts && filteredPosts.length > 0 ? (
        filteredPosts.map((post, index) => (
          <Card
            key={index}
            id={post.id}
            caption={post.caption}
            created_day={post.created_at}
            author={post.author}
            like={post.likes}
            comments={post.comments?.length}
          />
        ))
      ) : (
        <h1>No post has been created yet!</h1>
      )}
    </div>
    )
}

export default HomeFeed;