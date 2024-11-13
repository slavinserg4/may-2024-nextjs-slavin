import React from 'react';
import UsersComponent from "@/app/components/UsersComponent";
import {apiService} from "@/app/services/api.services";

const PostsPage = async () => {
    const users = await apiService.userService.getAll('users')

    return (
        <div>
            {<UsersComponent users={users}/>}
        </div>
    );
};

export default PostsPage;