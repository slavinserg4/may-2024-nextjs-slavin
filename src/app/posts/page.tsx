import React from 'react';
import {apiService} from "@/app/services/api.services";
import PostComponent from "@/app/components/PostComponent";



const PostsPage = async () => {
    let posts = await apiService.postService.getAll('posts')
    return (
        <div>
            {<PostComponent posts={posts}/>}
        </div>
    );
};

export default PostsPage;