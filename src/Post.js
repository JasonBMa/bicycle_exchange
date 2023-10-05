import React from 'react'

const Post = (key,id,title,body,img) => {
  return (
    <div className="w-32 h-32">
        <img src={img} alt={title}/>
        <h1>{title}</h1>
    </div>
  )
}

export default Post