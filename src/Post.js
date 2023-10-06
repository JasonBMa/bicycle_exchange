import React from 'react'

const Post = (args) => {
  return (
    <div className="flex flex-col bg-blue-300 w-64 h-76 min-w-min min-h-min m-3 rounded p-4">
        <img className="object-fill h-56 w-56 justify-self-center" src={args.image} alt={args.title}/>
        <p className="text-white text-2xl">{args.id} {args.body}</p>
        <h1 className="text-white text-xl">{args.title}</h1>
    </div>
  )
}

export default Post