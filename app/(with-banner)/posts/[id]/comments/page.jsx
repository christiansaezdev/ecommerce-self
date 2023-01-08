import Image from 'next/image'
const fetchComments = (id) =>{
    return fetch(`https://jsonplaceholder.typicode.com/post/${id}/comments`,{
        next:{
            revalidate:60
        }
    })
    .then(res => res.json())
}
export default async function Post({params}){
    const {id} = params;
    const comments  = await fetchComments(id)
    return(
        <ul style={{background:'#444', fontSize:'10px'}}>
           {comments.map(comment =>(
            <div>
            <li key={comment.id}>
            <Image width={50} height={50} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt={comment.name}/>
            <h4>{comment.name}</h4>
            <small>{comment.body}</small>
            </li>
            </div>
    ))}
        </ul>
    )
}