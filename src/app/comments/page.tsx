import React from 'react';
import {apiService} from "@/app/services/api.services";
import CommentComponent from "@/app/components/CommentComponent";

const CommentsPage = async () => {
    let comments = await apiService.commentService.getAll('comments')
    return (
        <div>
            {<CommentComponent comments={comments}/>}
        </div>
    );
};

export default CommentsPage;