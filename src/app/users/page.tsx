import React from 'react';
import Users from "@/app/components/Users";

const PostsPage = () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    return (
        <div>
            {<Users users={users}/>}
        </div>
    );
};

export default PostsPage;