import { useEffect, useState } from "react";
import PostsList from "./List";


const Posts = () =>{

    const [posts, setPosts] = useState(null);

    const deleteAction = (id)=>{
        const updatePosts = posts.filter(post => post.id != id);
        setPosts(updatePosts);
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
            setPosts(data);
        })
    },[]);

    return(
        <div>
            
            {/* posts &&  <PostsList posts={posts} name="Posts" deleteAction={deleteAction} /> */}
            <PostsList posts={posts} name="Posts" deleteAction={deleteAction} />
        </div>
    );

}

export default Posts;