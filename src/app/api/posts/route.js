import { NextResponse } from "next/server"
import connect from "@/utlis/db";
import Post from "@/models/Post";

export const GET = async(request)=>{
    try{
        console.log("1")
        await connect()
        console.log("2")
        const posts = await Post.find()
        console.log("3")
        return new NextResponse(JSON.stringify(posts), {status: 200});
        
    }catch(err){

        return new NextResponse("Database error", {status: 500});
    }
}