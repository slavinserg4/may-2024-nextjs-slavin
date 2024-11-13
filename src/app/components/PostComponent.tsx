import React, {FC} from 'react';
import Link from "next/link";


type Props = {
    posts:{
        id:number,
        title:string} []
}
const PostComponent:FC<Props> = ({posts}) => {
    return (
        <div>
            {
                posts.map(({id, title}) => (<div key={id}>
                    <Link href={'/posts/' + id}>{title}</Link>
                </div>))
            }
        </div>
    );
};

export default PostComponent;