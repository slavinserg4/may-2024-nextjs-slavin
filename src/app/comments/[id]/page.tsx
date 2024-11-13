import React from 'react';
import {getComment} from "@/app/services/api.services";

type Params = {
    id:number
}


const Page = async ({params}:{params:Params}) => {
    let comment = await getComment(params.id)
    return (
        <div>
            Id: {comment.id}
            name: {comment.name}
        </div>
    );
};

export default Page;