import React from 'react';
import {getPost} from "@/app/services/api.services";

type Params={
    id:number
}

const Page = async ({params}:{params:Params}) => {
    let post =await getPost(params.id)
    return (
        <div>
            id:{post.id},
            title:{post.title}
        </div>
    );
};

export default Page;