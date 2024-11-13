import axios from "axios";
import {IUser} from "@/app/models/IUser";
import {IPost} from "@/app/models/IPost";
import {IComment} from "@/app/models/IComment";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
})

const getAll = async <T, >(endpoint: string, callbackFn?: () => void): Promise<T> => {
    const {data} = await axiosInstance.get<T>(endpoint);
    return data;

}
export const apiService = {
    userService: {
        getAll
    },
    postService: {
        getAll
    },

    commentService: {
        getAll
    },

}
export const getUser = async (id:number): Promise<IUser> => {
    const {data} = await axiosInstance.get<IUser>('/users/'+ id);
    return data;
}
export const getPost = async (id:number): Promise<IPost> => {
    const {data} = await axiosInstance.get<IPost>('/posts/'+ id);
    return data;
}
export const getComment = async (id:number): Promise<IComment> => {
    const {data} = await axiosInstance.get<IComment>('/comments/'+ id);
    return data;
}