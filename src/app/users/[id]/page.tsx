import React from 'react';
import {getUser} from "@/app/services/api.services";

type Params = { id: number }
const Page = async ({params}:{params:Params}) => {
    let user = await getUser(params.id);
    return (
        <div>
            id:{user.id},
            name:{user.name}
        </div>
    );
};

export default Page;