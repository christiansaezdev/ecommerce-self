'use client'
import { useState } from "react";

export default function LikeButon({id}){
    const [liked, setLiked] =  useState(false);
    return(
        <button onClick={()=> setLiked(!liked)}>
        {liked ? '♥' : '♡'}
        </button>
    )
}